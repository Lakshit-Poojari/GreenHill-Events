import { createContactService } from "../services/contactService";
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
