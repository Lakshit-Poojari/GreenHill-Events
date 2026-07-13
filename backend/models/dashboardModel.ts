import db from "../lib/db";

export async function getDashboardStatsModel() {

    const [[posts]]: any = await db.query(
        "SELECT COUNT(*) AS total FROM posts"
    );

    const [[comments]]: any = await db.query(
        "SELECT COUNT(*) AS total FROM comments"
    );

    const [[users]]: any = await db.query(
        "SELECT COUNT(*) AS total FROM users"
    );

    return {
        posts: posts.total,
        comments: comments.total,
        users: users.total,
    };
}