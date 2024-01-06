import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const Login = () => {
  const [password, setPassword] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  const handleBlur = () => {
    setIsTouched(true);
  };

  const handleFocus = () => {
    setIsTouched(false);
  };

  const hasMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return (
    <div>
      <TextField
        type="password"
        value={password}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        variant="outlined"
        label="Password"
        style={hasMinLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar ? { borderColor: 'green' } : {}}
      />
      {!isTouched && (
        <div className='text-start'>
          <p style={{ color: hasMinLength ? 'green' : 'red' }}>
            <IconButton>{hasMinLength ? <CheckCircleIcon /> : <ErrorOutlineIcon />}</IconButton>
            8 characters minimum
          </p>
          <p style={{ color: hasUpperCase ? 'green' : 'red' }}>
            <IconButton>{hasUpperCase ? <CheckCircleIcon /> : <ErrorOutlineIcon />}</IconButton>
            At least one uppercase letter
          </p>
          <p style={{ color: hasLowerCase ? 'green' : 'red' }}>
            <IconButton>{hasLowerCase ? <CheckCircleIcon /> : <ErrorOutlineIcon />}</IconButton>
            At least one lowercase letter
          </p>
          <p style={{ color: hasNumber ? 'green' : 'red' }}>
            <IconButton>{hasNumber ? <CheckCircleIcon /> : <ErrorOutlineIcon />}</IconButton>
            Numbers are allowed
          </p>
          <p style={{ color: hasSpecialChar ? 'green' : 'red' }}>
            <IconButton>{hasSpecialChar ? <CheckCircleIcon /> : <ErrorOutlineIcon />}</IconButton>
            At least one special character
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;