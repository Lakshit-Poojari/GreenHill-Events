export type OfferingStatus = "ACTIVE" | "INACTIVE";

export interface Offering {
  id: number;
  offering_category_id: number;
  performer_name: string;
  slug: string;
  image_path: string;
  small_description: string;
  large_description: string;
  page_url: string | null;
  soundcloud_link: string | null;
  status: OfferingStatus;
  created_at: Date;
  updated_at: Date;
  updated_by: number | null;
  created_by: number | null;
}

export interface CreateOffering {
  offering_category_id: number;
  performer_name: string;
  slug?: string;
  image_path: File;
  small_description: string;
  large_description: string;
  page_url?: string | null;
  soundcloud_link?: string | null;
  status: OfferingStatus;
  created_by?: number;
}

export interface UpdateOffering {
  offering_category_id?: number;
  performer_name?: string;
  slug?: string;
  image_path?: File | null;
  small_description?: string;
  large_description?: string;
  page_url?: string | null;
  soundcloud_link?: string | null;
  status?: OfferingStatus;
  updated_by?: number;
}

export interface CreateOfferingDB {
  offering_category_id: number;
  performer_name: string;
  slug?: string;
  image_path: string;
  small_description: string;
  large_description: string;
  page_url?: string | null;
  soundcloud_link?: string | null;
  status: OfferingStatus;
  created_by?: number;
}
