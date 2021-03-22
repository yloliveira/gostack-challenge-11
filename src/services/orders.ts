import api from './api';
import IFood from '../dtos/IFoodDTO';

const list = async (): Promise<IFood[]> => {
  try {
    const response = await api.get('/orders');
    return response.data;
  } catch (error) {
    return [];
  }
};

export default { list };
