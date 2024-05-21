import { formatPrice } from "@/utils/price";
import { Product } from "@/types";
import Delete from "../Delete";

interface Props {
  products: Product[];
}

export default function ProductsTables({ products }: Props) {
  return (
    <div className="flex flex-col">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex justify-between items-center border-b border-lighter-main hover:bg-base p-6 font-semibold"
        >
          <div className="flex items-center justify-center w-2/12">
            {product.codigo}
          </div>
          <div className="flex items-center justify-center w-3/12">
            {product.nombre}
          </div>
          <div className="flex items-center justify-center w-3/12">
            {product.proveedor}
          </div>
          <div className="flex items-center justify-center w-3/12">
            ${formatPrice(product.precio)}
          </div>
          <div className="flex items-center justify-center w-2/12">
            {product.stock}
          </div>

          <Delete product={product} />
        </div>
      ))}
    </div>
  );
}
