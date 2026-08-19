import { notFound } from "next/navigation";
import CaseStudyTemplate from "@/components/public/Home/RecntPostCaseStudy/CaseStudyTemplate";
import {
  getAllCaseStudiesService,
  getCaseStudyBySlugService,
} from "@/backend/services/caseStudiesService";
import { getAllCommentService } from "@/backend/services/commentsService";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const result = await getCaseStudyBySlugService(slug);

  return {
    title: result?.title
      ? `${result.title} - GreenHillEvent`
      : "Case Studies - GreenHillEvent",
    icons: {
      icon: "/faviconV2.png",
      shortcut: "/faviconV2.png",
      apple: "/faviconV2.png",
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const result = await getCaseStudyBySlugService(slug);
  const recentPosts = await getAllCaseStudiesService();
  const recentComments = await getAllCommentService();

  if (!result) {
    notFound();
  }

  return (
    <CaseStudyTemplate
      data={result}
      recentPosts={recentPosts}
      recentComments={recentComments}
    />
  );
}
