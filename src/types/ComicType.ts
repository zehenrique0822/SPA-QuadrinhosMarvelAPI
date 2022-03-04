export type ComicType = {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  }
  price: number;
  raro: boolean;
  amount: number;
}
