import { Late, NextWeek, PageHeader, Today } from "@/components";
import { supabase } from "@/utils/supabase";

export const dynamic = "force-dynamic";
export default async function page() {
  const { data: products } = await supabase.from("productos").select("*");
  const { data: clients } = await supabase.from("clientes").select("*");
  const { data: items } = await supabase.from("ventas").select("*");
  if (!items) return;
  console.log("Sell items:", items);
  // const today = new Date();
  // const todayStr = today.toISOString().split("T")[0];

  // const nextWeek = new Date(today);
  // nextWeek.setDate(today.getDate() + 7);
  // const nextWeekStr = nextWeek.toISOString().split("T")[0];

  // const lateItems = items.filter((item) => new Date(item.fecha) < today);
  // const todayItems = items.filter((item) => item.fecha === todayStr);
  // const nextWeekItems = items.filter((item) => item.fecha === nextWeekStr);

  // console.log("Late Items:", lateItems);
  // console.log("Today Items:", todayItems);
  // console.log("Next Week Items:", nextWeekItems);

  return (
    <PageHeader
      products={products || []}
      clients={clients || []}
      pageTitle="Ventas"
      subHeading="0 ventas registradas"
      bottonText="Cuenta por cobrar"
      noSearchInput
    >
      <div className=" w-full mt-5 grid grid-cols-3 gap-5 pb-12">
        <Late lateItems={items} />
        <Today todayItems={items} />
        <NextWeek nextWeekItems={items} />
      </div>
    </PageHeader>
  );
}
