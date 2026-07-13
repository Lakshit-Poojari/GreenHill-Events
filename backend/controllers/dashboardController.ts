import { getDashboardStatsService } from "../services/dashboardService";

export async function getDashboardStatsController() {
    return await getDashboardStatsService();
}