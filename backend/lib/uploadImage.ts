import crypto from "crypto";
import path from "path";
import { supabase } from "./supabase";

const ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

const BUCKET_NAME = "greenhill-images";

export async function uploadImage(file: File, folder: string): Promise<string> {
  if (!file) {
    throw new Error("Image is required.");
  }

  // Validate image type
  if (!ALLOWED_TYPES.includes(file.type)) {
    throw new Error(
      "Invalid image format. Only JPG, JPEG, PNG and WEBP are allowed.",
    );
  }

  // Validate size
  if (file.size > MAX_FILE_SIZE) {
    throw new Error("Image size cannot exceed 5 MB.");
  }

  // Get file extension
  const extension = path.extname(file.name).toLowerCase();

  // Generate unique filename
  const fileName = `${Date.now()}-${crypto.randomUUID()}${extension}`;

  // Storage path
  const filePath = `${folder}/${fileName}`;

  // Convert File to Buffer
  const buffer = Buffer.from(await file.arrayBuffer());

  // Upload to Supabase Storage
  const { error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(filePath, buffer, {
      contentType: file.type,
      upsert: false,
    });

  if (error) {
    console.error("Supabase upload error:", error);
    throw new Error("Failed to upload image.");
  }

  // Get public URL
  const { data } = supabase.storage.from(BUCKET_NAME).getPublicUrl(filePath);

  return data.publicUrl;
}
