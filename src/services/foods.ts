import api from './api';
import IFood from '../dtos/IFoodDTO';

type IListDTO = {
  category_like?: number;
  name_like?: string | null;
};

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

const read = async (id: number): Promise<IFood | undefined> => {
  try {
    const response = await api.get(`/foods/${id}`);
    return response.data;
  } catch (error) {
    return undefined;
  }
};

export default { list, read };
