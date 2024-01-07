import React, { useContext, useState, useEffect } from 'react'
import './Homepage.css';
import { AuthContext } from '../../Context/AuthContext';
import { ProductContext } from '../../Context/ProductContext'
import Card from '../Card/Card';

function HomePage() {
  const [search, setSearch] = useState('');
  const { authToken } = useContext(AuthContext);
  const { setProducts } = useContext(ProductContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [])

  const fetchProducts = async () => {
    const url = "https://api.kalpav.com/api/v1/product/category/retail";
    const options = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const data = result;
      setData(data);
      setProducts(data.response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = () => {

  }

  return (
    <div className='flex flex-col justify-center items-center mt-12'>
      <input
        type='search'
        placeholder='Search something'
        onChange={(e) => setSearch(e.target.value)}
        className='p-4 searchbar'
      />
      <div className='flex'>
        <Card />
      </div>
    </div>
  )
}

export default HomePage