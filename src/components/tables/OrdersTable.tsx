"use client";
import { formatPrice } from "@/utils/price";
import { Order } from "@/types";

interface Props {
  orders: Order[];
}

export default function OrdersTable({ orders }: Props) {
  return (
    <div className="flex flex-col">
      {orders.map((order) => (
        <div
          key={order.id}
          className="flex justify-between items-center border-b border-lighter-main hover:bg-base p-6 font-semibold"
        >
          <div className="flex items-center justify-center w-1/12">
            {order.codigo}
          </div>
          <div className="flex items-center justify-center w-1/12">
            {order.fecha}
          </div>
          <div className="flex items-center justify-center w-2/12">
            {order.proveedor}
          </div>
          <div className="flex items-center justify-center w-1/12">
            {order.cantidad}
          </div>
          <div className="flex items-center justify-center w-2/12">
            ${formatPrice(order.precio)}
          </div>
          <div className="flex items-center justify-center w-2/12 gap-2">
            <span>{order.estado === "Pendiente" ? "⏳" : "✅"}</span>
            {order.estado}
          </div>
        </div>
      ))}
    </div>
  );
}
