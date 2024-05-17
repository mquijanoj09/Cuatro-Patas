export default interface Order {
  id: number;
  codigo: string;
  fecha: string;
  proveedor: string;
  cantidad: number;
  precio: number;
  estado: string;
}
