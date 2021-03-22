import api from './api';
import IFood from '../dtos/IFoodDTO';

type IListDTO = {
  category_like?: number;
  name_like?: string | null;
};

interface Extra {
  id: number;
  name: string;
  value: number;
  quantity: number;
}

interface IReadFood {
  id: number;
  name: string;
  description: string;
  category: number;
  price: number;
  image_url: string;
  thumbnail_url: string;
  formattedPrice: string;
  extras: Extra[];
}

const list = async ({
  category_like,
  name_like,
}: IListDTO): Promise<IFood[]> => {
  try {
    const params = {
      category_like,
      name_like,
    };
    const response = await api.get(`/foods`, { params });
    return response.data;
  } catch (error) {
    return [];
  }
};

const read = async (id: number): Promise<IReadFood | undefined> => {
  try {
    const response = await api.get(`/foods/${id}`);
    return response.data;
  } catch (error) {
    return undefined;
  }
};

export default { list, read };
