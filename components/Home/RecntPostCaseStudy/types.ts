export interface SidebarPost {
  title: string;
  href: string;
}

export interface Navigation {
  previous: {
    title: string;
    slug: string;
  };
  next: {
    title: string;
    slug: string;
  };
}

export interface CaseStudy {
  slug: string;

  title: string;

  date: string;

  category: string;

  featuredImage: string;

  description: string[];

  recentPosts: SidebarPost[];

  navigation: Navigation;
}