import fs from "fs/promises";
import path from "path";
import { supabase } from "./supabase";

const BUCKET_NAME = "greenhill-images";

export async function deleteImage(imagePath: string | null | undefined) {
  if (!imagePath) {
    return;
  }

  // Supabase image
  if (imagePath.startsWith("http")) {
    try {
      const url = new URL(imagePath);

      const marker = `/storage/v1/object/public/${BUCKET_NAME}/`;

      if (!url.pathname.includes(marker)) {
        console.warn("Invalid Supabase image URL:", imagePath);
        return;
      }

      const filePath = decodeURIComponent(
        url.pathname.split(marker)[1],
      );

      const { error } = await supabase.storage
        .from(BUCKET_NAME)
        .remove([filePath]);

      if (error) {
        console.warn("Failed to delete Supabase image:", error);
      } else {
        console.log("Supabase image deleted:", filePath);
      }

      return;
    } catch (error) {
      console.warn("Error deleting Supabase image:", error);
      return;
    }
  }

  // Old local image
  const oldImagePath = path.join(
    process.cwd(),
    "uploads",
    imagePath,
  );

  try {
    await fs.unlink(oldImagePath);
    console.log("Local image deleted:", oldImagePath);
  } catch (error) {
    console.warn("Local image not found:", oldImagePath);
  }
}