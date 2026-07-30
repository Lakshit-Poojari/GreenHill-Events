import { getContactCountModel } from "../models/commentsModel";
import {
  createContactModel,
  getAllContactModel,
  getSingleContactModel,
} from "../models/contactModel";
import { CreateContactType } from "../types/contactType";
import { sendContactEmail } from "../utils/contactEmail";

export async function createContactService(contactEmail: CreateContactType) {
  try {
    const { name, email, message } = contactEmail;

    if (!name || !email || !message) {
      return {
        success: false,
        message: "Name, email, and message are required.",
      };
    }

    const result = await createContactModel(contactEmail);

    if (result.affectedRows === 0) {
      return {
        success: false,
        message: "Failed to submit contact enquiry.",
      };
    }

    await sendContactEmail(contactEmail);

    return {
      success: true,
      message: "Contact enquiry submitted successfully.",
      contactEmail: {
        id: result.insertId,
      },
    };
  } catch (error) {
    console.error("Create Contact Service Error:", error);
    throw error;
  }
}

export async function getAllContactService(
  page: number = 1,
  limit: number = 10,
) {
  try {
    const contacts = await getAllContactModel(page, limit);
    const total = await getContactCountModel();

    return {
      success: true,
      data: contacts,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  } catch (error) {
    console.error("Get All Contact Service Error:", error);
    throw error;
  }
}

export async function getSingleContactService(id: number) {
  try {
    const contact = await getSingleContactModel(id);

    if (!contact) {
      return {
        success: false,
        message: "Contact enquiry not found.",
      };
    }

    return {
      success: true,
      data: contact,
    };
  } catch (error) {
    console.error("Get Single Contact Service Error:", error);
    throw error;
  }
}
