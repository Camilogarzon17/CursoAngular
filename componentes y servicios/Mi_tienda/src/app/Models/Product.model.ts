export interface Category{
  id: string;
  name: string;
}

export interface products{
  id: string;
  title: string;
  price: number;
  images: string[];
  description: string;
  category: Category;
}

export interface createProductsDTO extends Omit<products,'id' | 'category'>{
  categoryId: Number;
}
