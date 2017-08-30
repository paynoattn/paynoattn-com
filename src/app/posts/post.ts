export interface Post {
  _id?: string;
  title: string;
  categories: string[];
  imageURL?: string;
  source: string;
  link: string;
  preview: string;
  date: string;
}
