import { getContactCountModel } from "../models/commentsModel";
import {
  createContactModel,
  getAllContactModel,
  getSingleContactModel,
} from "../models/contactModel";
import { CreateContactType } from "../types/contactType";
import { sendContactEmail } from "../utils/contactEmail";

export async function createContactService(
  contactEmail: CreateContactType,
) {
  try {
    const { name, email, phone, message } = contactEmail;

    // Required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return {
        success: false,
        message: "Name, email, and message are required.",
      };
    }

    // -------------------------
    // Name validation
    // -------------------------
    const trimmedName = name.trim();

    if (trimmedName.length < 2) {
      return {
        success: false,
        message: "Name must be at least 2 characters long.",
      };
    }

    if (trimmedName.length > 50) {
      return {
        success: false,
        message: "Name must not exceed 50 characters.",
      };
    }

    const nameRegex =
      /^[A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;

    if (!nameRegex.test(trimmedName)) {
      return {
        success: false,
        message:
          "Please enter a valid name. Only letters, spaces, hyphens, and apostrophes are allowed.",
      };
    }

    // -------------------------
    // Email validation
    // -------------------------
    const trimmedEmail = email.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
      };
    }

    // -------------------------
    // Phone validation
    // -------------------------
    const trimmedPhone = phone?.trim() || "";

    if (trimmedPhone) {
      const normalizedPhone = trimmedPhone.replace(/[\s()-]/g, "");

      if (!/^\+?[1-9]\d{7,14}$/.test(normalizedPhone)) {
        return {
          success: false,
          message: "Please enter a valid international phone number.",
        };
      }
    }

    // -------------------------
    // Message validation
    // -------------------------
    const trimmedMessage = message.trim();

    if (trimmedMessage.length < 5) {
      return {
        success: false,
        message: "Message must be at least 5 characters long.",
      };
    }

    if (trimmedMessage.length > 2000) {
      return {
        success: false,
        message: "Message must not exceed 2000 characters.",
      };
    }

    // -------------------------
    // Validated data
    // -------------------------
    const validatedContact = {
      ...contactEmail,
      name: trimmedName,
      email: trimmedEmail,
      phone: trimmedPhone,
      message: trimmedMessage,
    };

    // -------------------------
    // Save to database
    // -------------------------
    const result = await createContactModel(validatedContact);

    if (result.affectedRows === 0) {
      return {
        success: false,
        message: "Failed to submit contact enquiry.",
      };
    }

    // -------------------------
    // Send email
    // -------------------------
    await sendContactEmail(validatedContact);

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
