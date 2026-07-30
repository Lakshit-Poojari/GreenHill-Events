import {
  createContactService,
  getAllContactService,
  getSingleContactService,
} from "../services/contactService";
import { CreateContactType } from "../types/contactType";

export async function createContactcontroller(contactEmail: CreateContactType) {
  try {
    const result = await createContactService(contactEmail);

    return result;
  } catch (error) {
    console.error("Create Contact Service Error:", error);
    throw error;
  }
}

export async function getAllContactController(page: number, limit: number) {
  try {
    return await getAllContactService(page, limit);
  } catch (error) {
    console.error("Get All Contact Controller Error:", error);

    return {
      success: false,
      message: "Internal Server Error.",
    };
  }
}

export async function getSingleContactController(id: number) {
  try {
    return await getSingleContactService(id);
  } catch (error) {
    console.error("Get Single Contact Controller Error:", error);

    return {
      success: false,
      message: "Internal Server Error.",
    };
  }
}
