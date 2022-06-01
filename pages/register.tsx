import axios from 'axios';
import { setCookies } from 'cookies-next';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import NavbarDark from '../components/NavbarDark';
import { Store } from '../utils/Store';


const register: NextPage = () => {

  const [name, setName] = useState('');
  const[email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const [state,dispatch] = useContext(Store);
  const {userInfo} = state;

    useEffect(() => {
      if(userInfo) {
        router.push('/');
      }
    }, [])


  const handleSubmit = async (e: { preventDefault: () => void; }) => {

    e.preventDefault();
    
    try {
      const { data } = await axios.post('api/users/register', {name, email, password})
      dispatch({ type: 'USER_LOGIN', payload: data });
      setCookies('userInfo', data);
      router.push('/');
     
    } catch (err) {
      console.log(err);  
    }
}

  return (
    <div>
      <NavbarDark/>
      <div className='pt-[25%] md:pt-[15%] lg:pt-[12%]'>
        <form onSubmit={handleSubmit} className='flex flex-col items-center bg-[#171717] w-[60%] md:w-[50%] lg:w-[30%] mx-auto rounded-[20px] p-10 pt-14'>
          <input className="w-[90%] h-[40px] lg:w-[300px] rounded pl-[10px] mb-[35px] focus:bg-[#171717] focus:text-[#f8f8f8] text-[#171717]"  type="text" value={name} placeholder="Name" required onChange={e => (setName(e.target.value))}/>
          <input className="w-[90%] h-[40px] lg:w-[300px] rounded mb-[35px]  pl-[10px] focus:bg-[#171717] focus:text-[#f8f8f8] text-[#171717] lg:mb-[35px]"  type="email" value={email} placeholder="Email" required onChange={e => (setEmail(e.target.value))}/>
          <input className="w-[90%] h-[40px] lg:w-[300px] rounded pl-[10px] mb-[30px] focus:bg-[#171717] focus:text-[#f8f8f8] text-[#171717] lg:mb-[65px]"  type="password" value={password} placeholder="Password" required onChange={e => (setPassword(e.target.value))}/>
          <button className='mt-[50px] font-lato font-bold text-[#f8f8f8] text-[14px] border border-[#FF6A26] rounded w-[150px] h-[42px] bg-[#FF6A26]
                          md:w-[140px] md:hover:bg-[#FF6A26]/90 md:hover:border-[##FF6A26]/70 transition-all duration-200 lg:w-[155px] lg:h-[45px] lg:mt-0' type="submit">Register</button>
        </form>
      </div>
    </div>
  )
}

export default register