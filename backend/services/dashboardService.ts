import { getDashboardStatsModel } from "../models/dashboardModel";

export async function getDashboardStatsService() {
    return await getDashboardStatsModel();
}