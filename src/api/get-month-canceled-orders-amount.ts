import { api } from "@/lib/axios";

type GetDaysOrdersAmountResponse = {
  amount: number;
  diffFromYesterday: number;
};

export async function getDaysOrdersAmount() {
  const response = await api.get<GetDaysOrdersAmountResponse>(
    "/metrics/day-orders-amount"
  );
  return response.data;
}
