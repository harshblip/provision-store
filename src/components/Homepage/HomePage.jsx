import React, { useContext, useState, useEffect } from 'react'
import './Homepage.css';
import { AuthContext } from '../../Context/AuthContext';
import { ProductContext } from '../../Context/ProductContext'
import Card from '../Card/Card';
import Navbar from '../Navbar';

function HomePage() {
  const { authToken } = useContext(AuthContext);
  const { setProducts } = useContext(ProductContext);
  const { setCart } = useContext(ProductContext);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
      setData(data.response);
      setProducts(data.response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = () => {
    let filteredProducts = [];

    data.filter(product => {
      if (product.productCategory.productCategoryName.toLowerCase().includes(searchTerm.toLowerCase())) {
        filteredProducts.push(product);
        return true;
      }
      return false;
    })
    setProducts(filteredProducts);
  }


  return (
    <>
      <Navbar />
      <div className='flex flex-col justify-center items-center mt-12'>
        <input
          type='search'
          placeholder='Search something'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='p-4 searchbar ml-4 mr-4 '
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        <div className='flex'>
          <Card />
        </div>
      </div>
    </>
  )
}

export default HomePage