export type OfferingStatus = "ACTIVE" | "INACTIVE";

export interface Offering {
    id: number;
    offering_category_id: number;
    performer_name: string;
    slug: string;
    image_path: string;
    small_description: string;
    large_description: string;
    status: OfferingStatus;
    created_at: Date;
    updated_at: Date;
    updated_by: number | null;
}

export interface CreateOffering {
    offering_category_id: number;
    performer_name: string;
    slug: string;
    image_path: string;
    small_description: string;
    large_description: string;
    status: OfferingStatus;
    updated_by?: number;
}

export interface UpdateOffering {
    offering_category_id?: number;
    performer_name?: string;
    slug?: string;
    image_path?: string;
    small_description?: string;
    large_description?: string;
    status?: OfferingStatus;
    updated_by?: number;
}