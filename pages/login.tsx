import axios from "axios";
import { setCookies } from "cookies-next";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Store } from "../utils/Store";
import NavbarDark from "../components/NavbarDark"

const login: NextPage = () => {

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
        const {data} = await axios.post('api/users/login', {email, password})
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
          <form onSubmit={handleSubmit} className='flex flex-col items-center bg-[#171717] w-[60%] md:w-[50%] lg:w-[40%] mx-auto rounded-[20px] p-10 pt-16'>
            <input className="w-[90%] h-[40px] lg:w-[400px] rounded pl-[10px] mb-[25px] focus:bg-[#171717] focus:text-[#f8f8f8] text-[#171717]"  type="email" value={email} placeholder="Email" required onChange={e => (setEmail(e.target.value))}/>
            <input className="w-[90%] h-[40px] lg:w-[400px] rounded pl-[10px] focus:bg-[#171717] focus:text-[#f8f8f8] text-[#171717] lg:mb-[45px]"  type="password" value={password} placeholder="Password" required onChange={e => (setPassword(e.target.value))}/>
            <button type="submit" className='mt-[50px] font-lato font-bold text-[#f8f8f8] text-[14px] border border-[#FF6A26] rounded w-[150px] h-[42px] bg-[#FF6A26]
                          md:w-[140px] md:hover:bg-[#FF6A26]/90 md:hover:border-[##FF6A26]/70 transition-all duration-200 lg:w-[155px] lg:h-[45px] lg:mt-0'>Login</button>
          </form>  
        </div>
      </div>
    )
}

export default login;