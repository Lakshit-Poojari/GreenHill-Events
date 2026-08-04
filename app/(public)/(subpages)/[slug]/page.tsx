import { notFound } from "next/navigation";
import CaseStudyTemplate from "@/components/public/Home/RecntPostCaseStudy/CaseStudyTemplate";
import { getCaseStudyBySlugService } from "@/backend/services/caseStudiesService";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const result = await getCaseStudyBySlugService(slug);

  if (!result) {
    notFound();
  }

  return <CaseStudyTemplate data={result} />;
}