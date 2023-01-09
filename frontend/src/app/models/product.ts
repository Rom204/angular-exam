export interface Product {
  id?: Number,
  desc: string,
  price: Number
}

export interface Customers {
  id: number;
  name: string;
  profession: string;
  telephone: string;
  email: string;
}

export interface Tasks {
  id: number;
  info: string;
  created_at: Date;
  customer_id: number;
  status: number;
}

