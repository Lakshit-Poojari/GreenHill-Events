import { createContactModel } from "../models/contactModel";
import { CreateContactType } from "../types/contactType";
import { sendContactEmail } from "../utils/contactEmail";

export async function createContactService(data: CreateContactType) {
  try {
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return {
        success: false,
        message: "Name, email, and message are required.",
      };
    }

    const result = await createContactModel(data);

    if (result.affectedRows === 0) {
      return {
        success: false,
        message: "Failed to submit contact enquiry.",
      };
    }

    await sendContactEmail(data)

    return {
      success: true,
      message: "Contact enquiry submitted successfully.",
      data: {
        id: result.insertId,
      },
    };
  } catch (error) {
    console.error("Create Contact Service Error:", error);
    throw error;
  }
}
