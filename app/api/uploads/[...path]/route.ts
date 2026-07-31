import fs from "fs/promises";
import path from "path";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path: filePath } = await params;

    const fullPath = path.join(process.cwd(), "uploads", ...filePath);

    console.log("Uploads API called");
    console.log(fullPath);

    const file = await fs.readFile(fullPath);

    const ext = path.extname(fullPath).toLowerCase();

    const mimeTypes: Record<string, string> = {
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".png": "image/png",
      ".webp": "image/webp",
      ".gif": "image/gif",
      ".svg": "image/svg+xml",
    };

    return new Response(file, {
      headers: {
        "Content-Type":
          mimeTypes[ext] ?? "application/octet-stream",
      },
    });
  } catch (error) {
    console.error(error);

    return new Response("Image not found", {
      status: 404,
    });
  }
}