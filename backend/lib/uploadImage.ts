import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

const ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

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

  // Create upload directory if it doesn't exist
  const uploadDir = path.join(process.cwd(), "uploads", folder);

  await fs.mkdir(uploadDir, {
    recursive: true,
  });

  // Get file extension
  const extension = path.extname(file.name).toLowerCase();

  // Generate unique filename
  const fileName = `${Date.now()}-${crypto.randomUUID()}${extension}`;

  // Convert file to buffer
  const buffer = Buffer.from(await file.arrayBuffer());

  // Save image
  await fs.writeFile(path.join(uploadDir, fileName), buffer);

  // Return relative path for DB
  return `${folder}/${fileName}`;
}
