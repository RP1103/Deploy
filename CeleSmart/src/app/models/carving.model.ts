export class Product {
    id: number;
    image: { data: { $binary: { base64: string } } };
    name: string;
    price: number;
    qty: number;
  }
