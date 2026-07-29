import db from "../lib/db";

export async function getDashboardStatsModel() {
  try {
    const [[caseStudy]]: any = await db.query(
      "SELECT COUNT(*) AS total FROM case_study",
    );

    const [[pendingComments]]: any = await db.query(
      `SELECT COUNT(*) AS total
        FROM comments
        WHERE name IS NOT NULL
        AND status = 'PENDING';`,
    );

    const [[users]]: any = await db.query(
      "SELECT COUNT(*) AS total FROM users",
    );

    const [[categories]]: any = await db.query(
      "SELECT COUNT(*) AS total FROM categories",
    );

    const [[Performers]]: any = await db.query(
      "SELECT COUNT(*) AS total FROM offerings",
    );

    const [[PerformersCategories]]: any = await db.query(
      "SELECT COUNT(*) AS total FROM offering_categories",
    );

    return {
      caseStudy: caseStudy.total,
      pendingComments: pendingComments.total,
      users: users.total,
      categories: categories.total,
      Performers: Performers.total,
      PerformersCategories: PerformersCategories.total,
    };
  } catch (error) {
    console.error("Get Dashboard Stats Model Error:", error);
    throw error;
  }
}
