import api from './api';
import ICategory from '../dtos/ICategoryDTO';

const list = async (): Promise<ICategory[]> => {
  try {
    const response = await api.get('/categories');
    return response.data;
  } catch (error) {
    return [];
  }
};

export default { list };
