import db from "../lib/db";

export async function getDashboardStatsModel() {
  try {
    const [[posts]]: any = await db.query(
      "SELECT COUNT(*) AS total FROM case_study",
    );

    const [[comments]]: any = await db.query(
      `SELECT COUNT(*) AS total
        FROM comments
        WHERE name IS NOT NULL
        AND status = 'PENDING';`,
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
