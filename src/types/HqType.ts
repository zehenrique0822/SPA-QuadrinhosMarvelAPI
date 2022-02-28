export type HqType = {
    id: number;
    title: string;
    thumbnail: {
      path: string;
      extension: string;
    }
    prices: [
      {
      type: string,
      price: number
     }
    ]
    raro: boolean;
  }
