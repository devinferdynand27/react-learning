import axios from 'axios';
import url_api from '../env_services';

// Tindakan untuk memulai permintaan produk
export const fetchProductsRequest = () => ({
  type: 'FETCH_PRODUCTS_REQUEST',
});

// Tindakan untuk menangani produk yang berhasil diambil
export const fetchProductsSuccess = (products) => ({
  type: 'FETCH_PRODUCTS_SUCCESS',
  payload: products,
});

// Tindakan untuk menangani kesalahan saat mengambil produk
export const fetchProductsFailure = (error) => ({
  type: 'FETCH_PRODUCTS_FAILURE',
  payload: error,
});

// Tindakan untuk mengambil daftar produk dari server
export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get(url_api+'products') // Ganti URL sesuai dengan endpoint API Anda.
      .then((response) => {
        dispatch(fetchProductsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error));
      });
  };
}
