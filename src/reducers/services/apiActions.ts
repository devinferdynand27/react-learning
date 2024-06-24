import { AppDispatch } from '../../app/store';
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from './apiSlice';
import api from '../../api/api';

export const fetchData = () => async (dispatch: AppDispatch) => {
  dispatch(fetchDataStart());

  try {
    const response = await api.get('/products');
    dispatch(fetchDataSuccess(response.data));
  } catch (error: any) {
    dispatch(fetchDataFailure(error.message));
  }
};
