import { getDashboardStatsService } from "../services/dashboardService";

export async function getDashboardStatsController() {
    try {
        return await getDashboardStatsService();
    } catch (error) {
        console.error("Get Dashboard Stats Controller Error:", error);
        throw error;
    }
}