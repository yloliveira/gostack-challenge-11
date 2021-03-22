import api from './api';
import IFood from '../dtos/IFoodDTO';

interface Extra {
  id: number;
  name: string;
  value: number;
  quantity: number;
}

type ICreateOrderDTO = {
  product_id: number;
  name: string;
  description: string;
  price: number;
  category: number;
  thumbnail_url: string;
  extras: Extra[];
};

const list = async (): Promise<IFood[]> => {
  try {
    const response = await api.get('/orders');
    return response.data;
  } catch (error) {
    return [];
  }
};

const create = async (order: ICreateOrderDTO): Promise<IFood | undefined> => {
  try {
    const response = await api.post('/orders', order);
    return response.data;
  } catch (error) {
    return undefined;
  }
};

export default { list, create };
