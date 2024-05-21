import { Late, NextWeek, PageHeader, Today } from "@/components";
import { supabase } from "@/utils/supabase";
import dayjs from "dayjs";

export const dynamic = "force-dynamic";
export default async function page() {
  const { data: items } = await supabase.from("transacciones").select("*");
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
      pageTitle="Transacciones"
      bottonText="Cuenta por pagar"
      subHeading="0 transacciones registradas"
      noSearchInput
    >
      <div className="w-full mt-5 grid grid-cols-3 gap-5 pb-12">
        <Late lateItems={lateItems} />
        <Today todayItems={todayItems} />
        <NextWeek nextWeekItems={nextWeekItems} />
      </div>
    </PageHeader>
  );
}
