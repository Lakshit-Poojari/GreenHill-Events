import db from "../lib/db";
import { getSingleCaseStudyModel } from "../models/caseStudiesModel";
import {
  createCommentModel,
  getAllCommentModel,
  getCommentsByCaseStudyModel,
  getSingleCommentModel,
  updateCommentModel,
  updateCommentStatusModel,
} from "../models/commentsModel";
import {
  CreateCommentType,
  UpdateCommentStatusType,
  UpdateCommentType,
} from "../types/commentsType";

export async function createCommentService(comment: CreateCommentType) {
  try {
    if (!comment.case_study_id) {
      throw new Error("case_study_id is required.");
    }

    if (!comment.name) {
      throw new Error("Name is required.");
    }

    if (!comment.email) {
      throw new Error("Email is required.");
    }

    if (!comment.comment) {
      throw new Error("Comment is required.");
    }

    const existCaseStudy = await getSingleCaseStudyModel(comment.case_study_id);

    if (!existCaseStudy) {
      throw new Error("Case study not found.");
    }

    if (comment.parent_comment_id) {
      const parentComment = await getSingleCommentModel(
        comment.parent_comment_id,
      );

      if (!parentComment) {
        throw new Error("Parent comment not found.");
      }

      if (parentComment.case_study_id !== comment.case_study_id) {
        throw new Error("Invalid parent comment.");
      }
    }

    const result = await createCommentModel({
      ...comment,
      status: "PENDING",
      created_by: null,
    });

    return result;
  } catch (error) {
    console.error("Create Comment Service Error:", error);
    throw error;
  }
}

export async function createAdminReplyService(comment: CreateCommentType) {
  const connection = await db.getConnection();

  try {
    await connection.beginTransaction();

    if (!comment.parent_comment_id) {
      throw new Error("Parent comment is required.");
    }

    if (!comment.created_by) {
      throw new Error("Admin ID is required.");
    }

    if (!comment.comment) {
      throw new Error("Comment is required.");
    }

    if (!comment.case_study_id) {
      throw new Error("Case study ID is required.");
    }

    const existCaseStudy = await getSingleCaseStudyModel(comment.case_study_id);

    if (!existCaseStudy) {
      throw new Error("Case study not found.");
    }

    const parentComment = await getSingleCommentModel(
      comment.parent_comment_id,
    );

    if (!parentComment) {
      throw new Error("Parent comment not found.");
    }

    if (parentComment.case_study_id !== comment.case_study_id) {
      throw new Error("Invalid parent comment.");
    }

    if (parentComment.status === "REJECTED") {
      throw new Error("Cannot reply to a rejected comment.");
    }

    const result = await createCommentModel(
      {
        ...comment,
        status: "APPROVED",
        created_by: comment.created_by,
      },
      connection,
    );

    if (result.affectedRows === 0) {
      throw new Error("Failed to create admin reply.");
    }

    if (parentComment.status === "PENDING") {
      const statusResult = await updateCommentStatusModel(
        parentComment.id,
        "APPROVED",
        comment.created_by,
        connection,
      );

      if (statusResult.affectedRows === 0) {
        throw new Error("Failed to approve parent comment.");
      }
    }

    await connection.commit();

    return result;
  } catch (error) {
    await connection.rollback();
    console.error("Create Admin Reply Service Error:", error);
    throw error;
  } finally {
    connection.release();
  }
}

export async function updateCommentService(comment: UpdateCommentType) {
  try {
    if (!comment.comment) {
      throw new Error("Comment is required.");
    }
    if (!comment.id) {
      throw new Error("Comment id is required.");
    }

    if (!comment.updated_by) {
      throw new Error("updated by id is required.");
    }

    const existComment = await getSingleCommentModel(comment.id);

    if (!existComment) {
      throw new Error("Comment does not exist");
    }

    if (existComment.created_by === null) {
      throw new Error("Visitor comments cannot be edited.");
    }

    const result = await updateCommentModel(comment);

    if (result.affectedRows === 0) {
      throw new Error("Comment not found.");
    }
    return result;
  } catch (error) {
    console.error("Update Comment Service Error:", error);
    throw error;
  }
}

export async function updateCommentStatusService(
  id: number,
  status: UpdateCommentStatusType,
) {
  try {
    if (!status.approved_by) {
      throw new Error("Approved by is required.");
    }

    if (!status.status) {
      throw new Error("status is required.");
    }

    const existComment = await getSingleCommentModel(id);

    if (!existComment) {
      throw new Error("comment does not Exist");
    }

    if (existComment.created_by !== null) {
      throw new Error("Admin replies cannot be moderated.");
    }

    if (existComment.status === status.status) {
      throw new Error(`Comment is already ${status.status}.`);
    }

    const result = await updateCommentStatusModel(
      id,
      status.status,
      status.approved_by,
    );

    if (result.affectedRows === 0) {
      throw new Error("Comment not found.");
    }

    return result;
  } catch (error) {
    console.error("Update Comment Status Service Error:", error);
    throw error;
  }
}

export async function getAllCommentService() {
  try {
    const result = await getAllCommentModel();
    return result;
  } catch (error) {
    console.error("Get All Comment Service Error:", error);
    throw error;
  }
}

export async function getSingleCommentService(id: number) {
  try {
    const result = await getSingleCommentModel(id);
    if (!result) {
      throw new Error("Comment not found.");
    }

    return result;
  } catch (error) {
    console.error("Get Single Comment Service Error:", error);
    throw error;
  }
}

export async function getCommentsByCaseStudyService(id: number) {
  try {
    const result = await getCommentsByCaseStudyModel(id);

    return result;
  } catch (error) {
    console.error("Get Comment by Case Study  Service Error:", error);
    throw error;
  }
}
