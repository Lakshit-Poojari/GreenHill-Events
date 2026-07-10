export interface OfferingVideo {
    id: number;
    offering_id: number;
    youtube_url: string;
    display_order: number;
    created_at: Date;
    updated_at: Date;
    updated_by: number | null;
}

export interface CreateOfferingVideo {
    offering_id: number;
    youtube_url: string;
    display_order: number;
    updated_by?: number;
}

export interface UpdateOfferingVideo {
    offering_id?: number;
    youtube_url?: string;
    display_order?: number;
    updated_by?: number;
}