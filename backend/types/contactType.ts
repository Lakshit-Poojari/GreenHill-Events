export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  created_at: string;
}

export interface CreateContactType {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface UpdateContactType {
  id: number;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  data?: Contact | Contact[];
}
