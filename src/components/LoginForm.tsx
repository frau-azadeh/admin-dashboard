import React from 'react'
import InputField from './InputField';
import Button from './Button';

interface LoginFormProps{

    email: string;
    password: string;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    onSubmit: (e:React.FormEvent) => void;

}

const LoginForm: React.FC<LoginFormProps> = ({email, password, setEmail, setPassword, onSubmit}) => {
  return (
    <form onSubmit={onSubmit} className='mt-4'>
        <InputField label='ایمیل' type='email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <InputField label='پسورد' type='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <Button label='ورود' disabled={!email || !password}/>
    </form>
  )
}

export default LoginForm