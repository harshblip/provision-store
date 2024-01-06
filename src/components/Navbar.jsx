import React from 'react'
import logo from '../images/prov-store.png';

function Navbar() {
    return (
        <div>
            <div className='flex shadow-md justify-between'>
                <div className='flex items-center'>
                    <img src={logo} alt='logo' width={120} className='ml-12' />
                    <p className='text-lg'>Provision Store</p>
                </div>
                <button className='mr-24 underline'>About</button>
            </div>
        </div>
    )
}

export default Navbar