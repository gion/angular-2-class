export type cartEntry = {
  quantity: number;
};

export type product = {
  price: number;
  name: string;
  description: string;
  id: number;
};

export type checkoutItem  = cartEntry & product & {
  subTotal: number;
};


