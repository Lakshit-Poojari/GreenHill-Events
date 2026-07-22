import { notFound } from "next/navigation";
import { caseStudies } from "@/components/public/Home/RecntPostCaseStudy/data";
import CaseStudyTemplate from "@/components/public/Home/RecntPostCaseStudy/CaseStudyTemplate";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const data = caseStudies[slug];

  if (!data) {
    notFound();
  }

  return <CaseStudyTemplate data={data} />;
}
