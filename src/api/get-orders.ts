import { api } from "@/lib/axios";

export type GerOrdersQuery = {
  orderId: string | null;
  customerName: string | null;
  status: string | null;
  pageIndex?: number | null;
};

export type OrderStatusType =
  | "pending"
  | "canceled"
  | "processing"
  | "delivering"
  | "delivered";

export type GetOrdersResponse = {
  orders: {
    orderId: string;
    createdAt: string;
    status: OrderStatusType;
    customerName: string;
    total: number;
  }[];
  meta: {
    pageIndex: number;
    perPage: number;
    totalCount: number;
  };
};

export async function getOrders({
  orderId,
  customerName,
  status,
  pageIndex,
}: GerOrdersQuery) {
  const response = await api.get<GetOrdersResponse>("/orders", {
    params: {
      orderId,
      customerName,
      status,
      pageIndex,
    },
  });

  return response.data;
}
