import { Late, NextWeek, PageHeader, Today } from "@/components";
import { supabase } from "@/utils/supabase";
import dayjs from "dayjs";

export const dynamic = "force-dynamic";
export default async function page() {
  const { data: products } = await supabase.from("productos").select("*");
  const { data: clients } = await supabase.from("clientes").select("*");
  const { data: items } = await supabase.from("ventas").select("*");
  if (!items) return;

  const lateItems = items.filter((item) =>
    dayjs(item.fecha).isBefore(dayjs(), "day")
  );

  const todayItems = items.filter((item) =>
    dayjs().isSame(dayjs(item.fecha), "day")
  );

  const nextWeekItems = items.filter((item) => {
    const itemDate = dayjs(item.fecha);
    const today = dayjs();
    const nextWeek = today.add(7, "day");

    return itemDate.isAfter(today, "day") && itemDate.isBefore(nextWeek, "day");
  });

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
        <Late lateItems={lateItems} />
        <Today todayItems={todayItems} />
        <NextWeek nextWeekItems={nextWeekItems} />
      </div>
    </PageHeader>
  );
}
