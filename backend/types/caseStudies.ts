export enum CaseStudyStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export interface CaseStudy {
  id: number;
  title: string;
  slug: string;
  image: string;
  description: string;
  youtube_url: string | null;
  status: CaseStudyStatus;

  created_by: number | null;
  created_at: string;

  updated_by: number | null;
  updated_at: string;
}

export interface CreateCaseStudy {
  title: string;
  slug: string;
  image: File | string;
  description: string;
  youtube_url?: string;
  status: CaseStudyStatus;
  created_by: number;
}

export interface UpdateCaseStudy {
  title?: string;
  slug?: string;
  image?: File | string;
  description?: string;
  youtube_url?: string;
  status?: CaseStudyStatus;
  updated_by?: number;
}