"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import EntertainmentCards from "@/components/public/Entertainment/EntertainmentCards";

const Page = () => {
  const { slug } = useParams();

  const [data, setData] = useState({
    heading: "",
    description: "",
    cards: [],
  });

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const categoryRes = await fetch(`/api/categories/slug/${slug}`);
        const categoryResult = await categoryRes.json();

        const offeringRes = await fetch(`/api/offerings/category/${slug}`);
        const offeringResult = await offeringRes.json();

        console.log("Category Result:", categoryResult);
        console.log("Offering Result:", offeringResult);

        if (
          categoryResult.success &&
          categoryResult.category &&
          categoryResult.category.length > 0
        ) {
          const category = categoryResult.category[0];

          setData({
            heading: category.menu_name.toUpperCase(),
            description: category.description,
            cards: (offeringResult.offerings ?? []).map((item: any) => ({
              title: item.offering_category_name,
              title1: item.performer_name,
              image: item.image_path,
              text: item.small_description,
              link: `/entertainment/${slug}/${item.slug}`,
            })),
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (slug) {
      fetchCategory();
    }
  }, [slug]);

  return (
    <EntertainmentCards
      heading={
        data.heading.charAt(0).toUpperCase() +
        data.heading.slice(1).toLowerCase()
      }
      description={data.description}
      cards={data.cards}
    />
  );
};

export default Page;
