
export interface Book {
  id?:number;
  title: string;
  author: string;
  publishedOn: number;
  publisher: string;
  price: string;
  genres: Array<string>;
}
