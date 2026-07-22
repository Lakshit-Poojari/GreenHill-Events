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

export interface createUserType {
  full_name: string;
  email: string;
  password: string;
  status: "ACTIVE" | "INACTIVE";
  created_by?: number;
}

export interface loginUserType {
  email: string;
  password: string;
}

export interface UpdateUserType {
  full_name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
}
