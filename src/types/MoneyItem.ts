export default interface MoneyItem {
  item: {
    id: string;
    producto?: string;
    descripcion?: string;
    cantidad?: number;
    fecha?: string;
    cliente?: string;
    precio?: number;
    nombre?: string;
    proveedor?: string;
  };
}
