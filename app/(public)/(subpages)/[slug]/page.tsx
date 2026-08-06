import { notFound } from "next/navigation";
import CaseStudyTemplate from "@/components/public/Home/RecntPostCaseStudy/CaseStudyTemplate";
import {
  getAllCaseStudiesService,
  getCaseStudyBySlugService,
} from "@/backend/services/caseStudiesService";
import { getAllCommentService } from "@/backend/services/commentsService";

interface PageProps {
  params: Promise<{ slug: string }>;
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
