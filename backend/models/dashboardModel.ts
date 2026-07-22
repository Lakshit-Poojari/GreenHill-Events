import db from "../lib/db";

export async function getDashboardStatsModel() {
  try {
    const [[posts]]: any = await db.query(
      "SELECT COUNT(*) AS total FROM offerings",
    );

    const [[comments]]: any = await db.query(
      "SELECT COUNT(*) AS total FROM categories",
    );

    const [[users]]: any = await db.query(
      "SELECT COUNT(*) AS total FROM users",
    );

    return {
      posts: posts.total,
      comments: comments.total,
      users: users.total,
    };
  } catch (error) {
    console.error("Get Dashboard Stats Model Error:", error);
    throw error;
  }
}
