import React, { useState } from 'react'
import './Homepage.css';

function HomePage() {
  const [search, setSearch] = useState('');
  return (
    <div className='flex flex-col'>
        <input 
          type='search'
          placeholder='Search something'
          onChange={(e) => setSearch(e.target.value)}
          className='p-4 searchbar'
        />
    </div>
  )
}

export default HomePage