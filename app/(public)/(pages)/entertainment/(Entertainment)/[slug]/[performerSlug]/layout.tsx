import type { Metadata } from "next";
import { getOfferingBySlugController } from "@/backend/controllers/offeringController";

interface Props {
  params: Promise<{
    slug: string;
    performerSlug: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { performerSlug } = await params;

  try {
    const result = await getOfferingBySlugController(performerSlug);

    const performer = result.offering;

    return {
      title: performer?.performer_name
        ? `${performer.performer_name} - GreenHillEvent`
        : "Entertainment - GreenHillEvent",
      icons: {
        icon: "/faviconV2.png",
        shortcut: "/faviconV2.png",
        apple: "/faviconV2.png",
      },
    };
  } catch (error) {
    console.error("Failed to generate metadata:", error);

    return {
      title: "Entertainment - GreenHillEvent",
      icons: {
        icon: "/faviconV2.png",
        shortcut: "/faviconV2.png",
        apple: "/faviconV2.png",
      },
    };
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}