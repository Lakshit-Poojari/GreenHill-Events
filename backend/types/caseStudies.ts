export enum CaseStudyStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export interface CaseStudy {
  id: number;
  title: string;
  featuredImage: string;
  date: string;
  category: string;
  description: string[];
  navigation: {
    previous: {
      title: string;
      slug: string;
    };
    next: {
      title: string;
      slug: string;
    };
  };
  recentPosts: {
    title: string;
    href: string;
  }[];
}

export interface CreateCaseStudy {
  title: string;
  slug?: string;
  image: File;
  description: string;
  youtube_url?: string;
  status: CaseStudyStatus;
  created_by: number;
  show_home: boolean;
  show_blog: boolean;
  show_case_study: boolean;
}

export interface UpdateCaseStudy {
  title?: string;
  slug?: string;
  image?: File | null;
  description?: string;
  youtube_url?: string;
  status?: CaseStudyStatus;
  updated_by?: number;
  show_home?: boolean;
  show_blog?: boolean;
  show_case_study?: boolean;
}

export interface CreateCaseStudyDB {
  title: string;
  slug: string;
  image: string;
  description: string;
  youtube_url?: string;
  status: CaseStudyStatus;
  created_by: number;
  show_home: boolean;
  show_blog: boolean;
  show_case_study: boolean;
}

export interface UpdateCaseStudyDB {
  title: string;
  slug: string;
  image: string;
  description: string;
  youtube_url?: string;
  status: CaseStudyStatus;
  updated_by: number;
  show_home: boolean;
  show_blog: boolean;
  show_case_study: boolean;
}

export interface CaseStudyDB {
  id: number;
  title: string;
  slug: string;
  image: string;
  description: string;
  youtube_url?: string;
  status: CaseStudyStatus;
  show_home: boolean;
  show_blog: boolean;
  show_case_study: boolean;
  comment_count: number;
  created_at: string;
  updated_at: string;
}