export enum offeringCategoryStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export interface OfferingCategory {
  id: number;
  category_id: number;
  name: string;
  slug: string;
  display_order: number;
  status: offeringCategoryStatus;
  created_at: Date;
  updated_at: Date;
  updated_by: number | null;
}

export interface createOfferingCategory {
  category_id: number;
  name: string;
  slug: string;
  display_order: number;
  status: offeringCategoryStatus;
  updated_by?: number;
}

export interface updateOfferingCategory {
  category_id?: number;
  name?: string;
  slug?: string;
  display_order?: number;
  status?: offeringCategoryStatus;
  updated_by?: number;
}
