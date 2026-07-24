export interface OfferingVideo {
  id: number;
  offering_id: number;
  performer_name?: string;
  youtube_url: string;
  display_order: number;
  status: "ACTIVE" | "INACTIVE";
  created_at: Date;
  updated_at: Date;
  created_by_name?: string;
  updated_by_name?: string | null;
  soundcloud_link?: string | null;
}
export interface CreateOfferingVideo {
  offering_id: number;
  youtube_url: string;
  display_order: number;
  status: "ACTIVE" | "INACTIVE";
  created_by: number;
  updated_by?: number;
  soundcloud_link?: string | null;
}

export interface UpdateOfferingVideo {
  offering_id?: number;
  youtube_url?: string;
  display_order?: number;
  status?: "ACTIVE" | "INACTIVE";
  updated_by?: number;
  soundcloud_link?: string | null;
}
