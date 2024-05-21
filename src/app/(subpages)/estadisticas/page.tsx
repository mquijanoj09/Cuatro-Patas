import { Facturation, PageHeader, Stats } from "@/components";
import { supabase } from "@/utils/supabase";

export const dynamic = "force-dynamic";
export default async function page() {
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
  const stats = [
    {
      id: 1,
      mes: "Enero",
      facturacion: 1000,
      ventas: 100,
      ganancias: 200,
    },
    {
      id: 2,
      mes: "Febrero",
      facturacion: 1200,
      ventas: 150,
      ganancias: 300,
    },
    {
      id: 3,
      mes: "Marzo",
      facturacion: 1300,
      ventas: 200,
      ganancias: 400,
    },
    {
      id: 4,
      mes: "Abril",
      facturacion: 1400,
      ventas: 250,
      ganancias: 500,
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
