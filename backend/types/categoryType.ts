// types/categoryTypes.ts

export enum CategoryStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export interface Category {
  id: number;
  category_name: string;
  menu_name: string;
  slug?: string;
  image: string;
  description: string;
  long_description: string;
  status: CategoryStatus;
  created_by: number;
  created_at: Date;
  updated_at: Date;
}

export interface CreateCategoryType {
  category_name: string;
  menu_name: string;
  image: string;
  slug: string
  description: string;
  long_description: string;
  status: CategoryStatus;
  created_by: number;
}

export interface UpdateCategoryType {
  category_name: string;
  menu_name: string;
  image: string;
  description: string;
  long_description: string;
  status: CategoryStatus;
}

export interface UpdateCategoryStatusType {
    status: CategoryStatus;
}