import { Facturation, PageHeader, Stats } from "@/components";
import { supabase } from "@/utils/supabase";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";
export default async function page() {
  cookies();
  const { data: products } = await supabase.from("productos").select("*");
  const { data: orders } = await supabase.from("pedidos").select("*");
  const { data: clients } = await supabase.from("clientes").select("*");
  if (!products || !clients || !orders) return null;
  const estimatedProfitValue = products.reduce(
    (acc, product) => acc + product.precio * product.stock * 1.2,
    0
  );
  const stockCostValue = products.reduce(
    (acc, product) => acc + product.stock * product.precio,
    0
  );
  const clientsNumber = clients.length;
  const ordersNumber = orders.length;
  const date = new Date();
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const currentMonthIndex = date.getMonth();
  const currentMonth = months[currentMonthIndex];
  const pastTwoMonth = months[(currentMonthIndex - 2 + 12) % 12];
  const pastMonth = months[(currentMonthIndex - 1 + 12) % 12];
  const nextMonth = months[(currentMonthIndex + 1) % 12];
  const sales: { [key: string]: number } = {};
  sales[pastTwoMonth] = 0;
  sales[pastMonth] = 0;
  sales[currentMonth] = 0;
  sales[nextMonth] = 0;

  orders.forEach((order) => {
    const orderDate = new Date(order.fecha);
    const orderMonth = months[orderDate.getMonth()];

    if (sales.hasOwnProperty(orderMonth)) {
      sales[orderMonth] += order.precio * order.cantidad;
    }
  });

  const stats = [
    {
      id: 1,
      mes: pastTwoMonth,
      ventas: sales[pastTwoMonth],
      ganancias: sales[pastTwoMonth] * 0.2,
    },
    {
      id: 2,
      mes: pastMonth,
      ventas: sales[pastMonth],
      ganancias: sales[pastMonth] * 0.2,
    },
    {
      id: 3,
      mes: currentMonth,
      ventas: sales[currentMonth],
      ganancias: sales[currentMonth] * 0.2,
    },
    {
      id: 4,
      mes: nextMonth,
      ventas: sales[nextMonth],
      ganancias: sales[nextMonth] * 0.2,
    },
  ];

  return (
    <PageHeader
      pageTitle="Estadísticas"
      bottonText="Cliente"
      placeholderText="Nombre"
      noSubHeading
      noSearchBar
    >
      <div className="py-12">
        <div className="w-full flex bg-white bg-opacity-50 py-6 rounded-xl">
          <Stats
            estimatedProfitValue={estimatedProfitValue}
            stockCostValue={stockCostValue}
            clientsNumber={clientsNumber}
            ordersNumber={ordersNumber}
          />
          <Facturation stats={stats} />
        </div>
      </div>
    </PageHeader>
  );
}
