import { getDashboardStatsModel } from "../models/dashboardModel";

export async function getDashboardStatsService() {
    try {
        return await getDashboardStatsModel();
    } catch (error) {
        console.error("Get Dashboard Stats Service Error:", error);
        throw error;
    }
}