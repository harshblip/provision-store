import React, { useState } from 'react'
import { convertToSHA256 } from '../utils/TxtToSha256'
import { useNavigate } from 'react-router-dom';

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
    <div>
      <div>

      </div>
      <div>

        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
          <input type="submit" value="Sign In" />
        </form>
      </div>
    </div>
  )
}

export default Login