import React, { useState } from 'react'
import { convertToSHA256 } from '../utils/TxtToSha256'
import { useNavigate } from 'react-router-dom';
import image from '../images/loginbg.jpg'
import store from '../images/prov-store.png'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    const hashedPassword = await convertToSHA256(password);

    navigate('/homepage');
    const formData = new FormData();
    formData.append('username', email);
    formData.append('password', hashedPassword);
    formData.append('grant_type', 'password');

    const response = await fetch('https://apiv2stg.promilo.com/user/oauth/token', {
      method: 'POST',
      body: formData,
      headers: {
        'Authorization': process.env.REACT_APP_AUTHORIZATION
      }
    })

    const data = await response.json();
    if (data.response && data.response.access_token) {
      console.log(data.response.access_token);
      localStorage.setItem('access_token', data.response.access_token);
    } else {
      console.log(data.error);
    }
    console.log(data)
  }
  return (
    <div className='flex md:flex-row sm:flex-col'>
      <div>
        <img src = {image} alt = "background" className='imag mr-2 ml-2'/>
      </div>
      <div className='border'>
        <form onSubmit={handleSubmit} className='absolute shadow-lg space-y-10 mt-12 ml-32 flex flex-col text-start p-8'>
          <img src = {store} alt = 'store' className='w-[18rem]'/>
          <label className='flex flex-col mr-12'>
            <p>Email:</p>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} 
            className='border border-red-500'
            />
          </label>
          <label className='flex flex-col mr-12'>
            <p>Password:</p>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} 
            className='border border-red-500'
            />
          </label>
          <input type="submit" value="Sign In" />
        </form>
      </div>
    </div>
  )
}

export default Login