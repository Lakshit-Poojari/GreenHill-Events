import {
  createAdminReplyService,
  createCommentService,
  getAllCommentService,
  getCommentsByCaseStudyService,
  getSingleCommentService,
  updateCommentService,
  updateCommentStatusService,
} from "../services/commentsService";

import {
  CreateCommentType,
  UpdateCommentStatusType,
  UpdateCommentType,
} from "../types/commentsType";

export async function createCommentController(comment: CreateCommentType) {
  try {
    const result = await createCommentService(comment);

    return result;
  } catch (error) {
    console.error("Create Comment Controller Error:", error);
    throw error;
  }
}

export async function createAdminReplyController(comment: CreateCommentType) {
  try {
    const result = await createAdminReplyService(comment);

    return result;
  } catch (error) {
    console.error("Create Admin Reply Controller Error:", error);
    throw error;
  }
}

export async function updateCommentController(comment: UpdateCommentType) {
  try {
    const result = await updateCommentService(comment);

    return result;
  } catch (error) {
    console.error("Update Comment Controller Error:", error);
    throw error;
  }
}

export async function updateCommentStatusController(
  id: number,
  status: UpdateCommentStatusType,
) {
  try {
    const result = await updateCommentStatusService(id, status);

    return result;
  } catch (error) {
    console.error("Update Comment Status Controller Error:", error);
    throw error;
  }
}

export async function getAllCommentController() {
  try {
    const result = await getAllCommentService();

    return result;
  } catch (error) {
    console.error("Get All Comment Controller Error:", error);
    throw error;
  }
}

export async function getSingleCommentController(id: number) {
  try {
    const result = await getSingleCommentService(id);

    return result;
  } catch (error) {
    console.error("Get Single Comment Controller Error:", error);
    throw error;
  }
}

export async function getCommentsByCaseStudyController(caseStudyId: number) {
  try {
    const result = await getCommentsByCaseStudyService(caseStudyId);

    return result;
  } catch (error) {
    console.error("Get Comments By Case Study Controller Error:", error);
    throw error;
  }
}