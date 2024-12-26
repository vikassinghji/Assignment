import React from 'react'
import BackLogo from './BackLogo'
import logo from '../assets/logo.png'
import Chart from './Chart'
import { BiUpArrowAlt } from "react-icons/bi";
import { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaBitbucket } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { SiGitlab } from "react-icons/si";
import { IoKeyOutline } from "react-icons/io5";


const Login = ( className) => {

    const [flag, setFlag] = useState(true);

  return (
    <div  className={` ${className}  h-fit py-28 xl:py-24  min:h-[100vh] w-full flex xl:flex-row flex-col justify-center items-center  relative bg-[#FAFAFA] `}>
        <BackLogo className=" absolute left-0 bottom-0 "/>
        
        {/* left side */}
        <div className=' scale-0 xl:scale-100 xl:w-[50%] xl:h-full  flex justify-center items-center border-r'>
             <div className=' w-[474px] xl:h-[322px] relative'>
                <div className=' h-[170px] w-[447px] absolute left-0 top-0 z-0 rounded-xl shadow-[1px_1px_20px_4px_rgba(0,0,0,0.1)] bg-white border border-gray-200'>

                <div className=' w-full h-[40%]  rounded-lg  flex items-center gap-2 justify-center border-b-2'>
                    <img src={logo} className=' w-[31px] h-[31px]'/>
                    <p className=' text-[18px] font-bold'>AI to Detect & Autofix Bad Code</p>
                </div>

                <div className=' w-full h-[60%] flex justify-center items-center'>

                <div className=' h-full w-[30%] flex flex-col justify-center items-center'>
                    <p className=' text-[18px] font-bold'>30+</p>
                    <p className=' text[14px] font-normal'>Language Support</p>
                </div>

                <div className=' h-full w-[30%] flex flex-col justify-center items-center'>
                    <p className=' text-[18px] font-bold'>10K+</p>
                    <p className=' text[14px] font-normal'>Developer</p>
                </div>

                <div className=' h-full w-[30%] flex flex-col justify-center items-center'>
                    <p className=' text-[18px] font-bold'>100K+</p>
                    <p className=' text[14px] font-normal'>Hours Saved</p>
                </div>

                </div>

                </div>

                <div className=' w-[270px] h-[164px] absolute bottom-0 right-0 z-10 rounded-xl bg-white shadow-[1px_1px_20px_4px_rgba(0,0,0,0.1)] border border-gray-200'>

                <div className=' w-full h-[50%] flex items-center justify-around'>
                   <Chart/>
                   <div className=' h-full w-fit flex flex-col gap-1 justify-center'>
                    <div className=' h-fit w-full flex items-center justify-center gap-1'>
                        <BiUpArrowAlt className='text-[20px] font-extrabold text-[#0049C6]' />
                        <p className=' text-[14px] font-bold text-[#0049C6]'>14%</p>
                    </div>

                    <p className=' text-[12px] font-normal text-[#171717]'>This week</p>
                   </div>
                </div>

                <div className=' w-full h-[50%] flex flex-col items-start justify-center pl-9'>
                    <p className=' text-[14px] font-bold'>Issues Fixed</p>
                    <p className=' text-[32px] font-bold'>500k+</p>
                </div>

                </div>
             </div>
        </div>

        {/* right side */}
        <div className=' w-full xl:w-[50%] h-full flex justify-center items-center flex-col gap-3'>

            <div className=' w-[90%] h-fit flex flex-col border'>
    
            <div className=' w-full h-[45%] flex items-center flex-col justify-around gap-2 border-b pb-7'>
                <div className=' w-fit h-fit flex gap-2 items-center'>
                    <img className='h-[32px] w-[32px]' src={logo}/>
                    <p className=' text-[30px] font-normal'>CodeAnt AI</p>
                </div>

                <p className=' text-[28px] xl:text-[32px] font-semibold'>Welcome to CodeAnt AI</p>

                <div className=' w-full h-fit flex gap-2 items-center justify-center pt-4'>
                   <div onClick={ () => setFlag(true)} className={` ${flag ? 'bg-[#1570EF] text-white' : 'bg-white text-[#414651]'} w-[45%] h-fit flex justify-center items-center py-3 rounded-xl cursor-pointer`}>
                    <p className={' text-[20px] font-semibold'}>SAAS</p>
                   </div>
                   <div onClick={ () => setFlag(false)} className={` ${!flag ? 'bg-[#1570EF] text-white' : 'bg-white text-[#414651]'} w-[45%] h-fit flex justify-center items-center py-3 rounded-xl cursor-pointer`}>
                    <p className={' text-[20px] font-semibold'}>Self Hosted</p>
                   </div>
                </div>
            </div>

            <div className=' h-[55%] w-full flex flex-col justify-center items-center gap-4'>
               {
                flag ? <div className=' w-full h-full p-5 pt-9 flex flex-col items-center justify-between gap-3'>
                        <div className=' h-fit w-[90%] flex justify-center items-center text-[16px] font-bold gap-2 border py-3 cursor-pointer'>
                            <FaGithub />
                            <p>Sign in with Github</p>
                        </div>
                        <div className=' h-fit w-[90%] flex justify-center items-center text-[16px] font-bold gap-2 border py-3 cursor-pointer'>
                            <FaBitbucket className=' text-[#1570EF]' />
                            <p>Sign in with Bitbucket</p>
                        </div>
                        <div className=' h-fit w-[90%] flex justify-center items-center text-[16px] font-bold gap-2 border py-3 cursor-pointer'>
                            <VscAzureDevops className=' text-[#1570EF]' />
                            <p>Sign in with Azure Devops</p>
                        </div>
                        <div className=' h-fit w-[90%] flex justify-center items-center text-[16px] font-bold gap-2 border py-3 cursor-pointer'>
                            <SiGitlab  className=' text-orange-600'/>
                            <p>Sign in with GiLab</p>
                        </div>
                </div> 
                : <div className=' w-full h-full p-5 pt-9 pb-36 flex flex-col items-center justify-between gap-3'>
                       
                        <div className=' h-fit w-[446px] flex justify-center items-center text-[16px] font-bold gap-2 border py-3 cursor-pointer'>
                            <SiGitlab  className=' text-orange-600'/>
                            <p>Sign in with GiLab</p>
                        </div>
                        <div className=' h-fit w-[446px] flex justify-center items-center text-[16px] font-bold gap-2 border py-3 cursor-pointer'>
                            <IoKeyOutline />
                            <p>Sign in with SSO</p>
                        </div>
                </div> 
               }
            </div>
            
            </div>

            <div className=' w-full h-auto flex justify-center items-center'>
                <p className=' text-[16px] font-normal'>By signing up you agree to the <span className=' font-semibold'>Privacy Policy.</span></p>
            </div>

        </div>
    </div>
  )
}

export default Login