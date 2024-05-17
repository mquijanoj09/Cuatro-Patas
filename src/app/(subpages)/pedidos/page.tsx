import {
  OrdersTable,
  PageHeader,
  PaginationComp,
  TableInfo,
} from "@/components";
import { supabase } from "@/utils/supabase";

const infoTabla = [
  {
    title: "Código",
    width: "w-1/12",
  },
  {
    title: "Fecha",
    width: "w-1/12",
  },
  {
    title: "Proveedor",
    width: "w-2/12",
  },
  {
    title: "Cantidad",
    width: "w-1/12",
  },
  {
    title: "Precio",
    width: "w-2/12",
  },
  {
    title: "Estado de pago",
    width: "w-2/12",
  },
];

export const dynamic = "force-dynamic";
export default async function page() {
  const { data: orders } = await supabase.from("pedidos").select("*");
  const ordersPerPage = orders ? orders.slice(0, 5) : [];
  if (!orders) return null;
  const numOrders = orders.length;
  return (
    <PageHeader
      pageTitle="Pedidos"
      subHeading={`${numOrders} ${
        numOrders === 1 ? "pedido abierto" : "pedidos abiertos"
      }`}
      bottonText="Pedido"
      placeholderText="Producto o proveedor"
    >
      <div className="bg-white bg-opacity-50 w-full mt-5 p-6 flex rounded-xl flex-col">
        <TableInfo infoTabla={infoTabla} />
        <OrdersTable orders={ordersPerPage} />
      </div>
      <PaginationComp />
    </PageHeader>
  );
}
