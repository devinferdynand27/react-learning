import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks'; // Gunakan hook yang baru saja kita buat
import { fetchData } from '../reducers/services/apiActions';

const DataComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.api);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Data</h1>
      <ul>
        {data && data.map((item: any, index: number) => (
          <li key={index}>{item.title}</li>
          // Ganti 'item.title' dengan properti dari objek 'item' yang ingin Anda tampilkan
        ))}
      </ul>
    </div>
  );
};

export default DataComponent;
