import type { Metadata } from "next";
import { getCategoryBySlugController } from "@/backend/controllers/categoryController";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    const result = await getCategoryBySlugController(slug);

    console.log("METADATA RESULT:", result);

    const category = result.category?.[0];
    

    return {
      title: category?.menu_name
        ? `${category.menu_name} - GreenHillEvent`
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