import { api } from "@/lib/axios";

type GetMonthOrdersAmountResponse = {
  amount: number;
  diffFromLastMonth: number;
};

export async function getMonthOrdersAmount() {
  const response = await api.get<GetMonthOrdersAmountResponse>(
    "/metrics/month-orders-amount"
  );
  return response.data;
}
