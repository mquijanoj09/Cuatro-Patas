import { PageHeader, TableInfo } from "@/components";

const infoTabla = [
  {
    title: "Código",
  },
  {
    title: "Fecha",
  },
  {
    title: "Proovedor",
  },
  {
    title: "Canidad",
  },
  {
    title: "Valor",
  },
  {
    title: "Estado",
  },
  {
    title: "Observaciones",
  },
];

export default function page() {
  return (
    <PageHeader
      pageTitle="Pedidos"
      subHeading="0 pedidos abiertos"
      bottonText="Pedido"
      placeholderText="Producto o proveedor"
    >
      <div className="bg-white bg-opacity-50 w-full mt-5 p-6 flex gap-6 rounded-xl flex-col">
        <TableInfo infoTabla={infoTabla} />
        {/* <TableItems items={items} /> */}
      </div>
    </PageHeader>
  );
}
