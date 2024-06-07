import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../reducer/services/produk/productActions";

const Profile = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (productState.loading) {
    return <div>Loading...</div>;
  }

  if (productState.error) {
    return <div>Error: {productState.error.message}</div>;
  }

  return (
    <div>
      <h2>Daftar Produk</h2>
      {(
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {productState.products.map((product, index) => (
              <tr key={index}>
                <td>{product.title}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Profile;
