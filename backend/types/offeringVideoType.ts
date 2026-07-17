export interface OfferingVideo {
    id: number;
    offering_id: number;
    performer_name?: string; // Returned when using JOIN
    youtube_url: string;
    display_order: number;
    status: "ACTIVE" | "INACTIVE";
    created_at: Date;
    updated_at: Date;
    created_by: number;
    updated_by: number | null;
}

export interface CreateOfferingVideo {
    offering_id: number;
    youtube_url: string;
    display_order: number;
    status: "ACTIVE" | "INACTIVE";
    created_by: number;
    updated_by?: number;
}

export interface UpdateOfferingVideo {
    offering_id?: number;
    youtube_url?: string;
    display_order?: number;
    status?: "ACTIVE" | "INACTIVE";
    updated_by?: number;
}