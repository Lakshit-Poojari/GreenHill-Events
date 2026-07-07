export enum UserRole {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
}

export enum UserStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export interface User {
  id: number;
  full_name: string;
  email: string;
  password: string;
  role: UserRole;
  status: UserStatus;
  created_at: Date;
  updated_at: Date;
  created_by: number | null;
  last_login_at: Date | null;
}