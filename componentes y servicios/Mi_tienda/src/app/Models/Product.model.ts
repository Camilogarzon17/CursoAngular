export interface Category{
  id: string;
  name: string;
}

export interface Products{
  id: string;
  title: string;
  price: number;
  images: string[];
  description: string;
  category: Category;
}

export interface CreateProductsDTO extends Omit<Products,'id' | 'category'>{
  categoryId: Number;
}

export interface UpdateProductDTO extends Partial<CreateProductsDTO>{}