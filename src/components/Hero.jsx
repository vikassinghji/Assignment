import React, { useEffect } from 'react'
import { items } from '../data'
import { LuRefreshCcw } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { GoDatabase } from "react-icons/go";

const Hero = ({color}) => {
    
    const [flag, setFlag] = useState(false);
    const refreshHandler = () =>{
        setFlag(!flag);
    }

    const [newItems, setNewItems] = useState(items);

    const changeHandler = (e) => {
        const value = e.target.value;
        const filteredItems = items.filter( (item) => item.heading.toLowerCase().includes(value.toLowerCase()));
        console.log(filteredItems);

        setNewItems(filteredItems);
    }

    useGSAP( () => {

        if(flag){
          gsap.to('.refresh', { rotate: 180, duration: 1, repeate: -1})
        }
        else{
            gsap.to('.refresh', { rotate: -180, duration: 1, repeate: -1})
        }
    }, [flag]);

  return (
    <div className=" absolute md:relative  top-[98px] z-0 w-full h-fit flex flex-col justify-start items-center mt-2 p-7 border border-[#6C6C6C4D] rounded-lg " 
           style={{ backgroundColor: color}}>
        
        <div className=' w-full h-fit flex justify-center item-end'>
        <div className=' h-[208px] lg:h-[196px] w-full flex flex-col gap-6 p-3 md:p-6 border border-[#6C6C6C4D] rounded-lg'>
        
        <div className=' w-full h-fit flex lg:flex-row flex-col justify-between items-center'>
            <div className=' lg:w-fit h-fit flex flex-col w-full '>
                <p className=' text-[24px] lg:text-[32px] font-medium'>Repositories</p>
                <p className=' text-[16px] lg:text-[20px] font-normal opacity-90'>{items.length} total Repositories</p>
            </div>

            <div className=' w-full lg:w-fit h-fit flex flex-row items-center gap-2 opacity-90 text-[12px] lg:text-[18px]'>
                <button onClick={refreshHandler} className=' w-fit h-fit flex gap-1 items-center border p-2 px-3 border-[#6C6C6C4D] rounded-lg'>
                <LuRefreshCcw className='refresh'/>
                <p>Refresh All</p>
                </button>
                <button className=' w-fit h-fit flex gap-1 text-[12px] lg:text-[18px] text-white bg-[#1570EF] items-center border p-2 px-3 border-[#6C6C6C4D] rounded-lg'>
                <LuPlus />
                <p>Add Repository</p>
                </button>
            </div>
        </div>

        <div className=' w-fit h-fit flex justify-start gap-4 text-[14px] lg:text-[18px] items-center border border-[#6C6C6C4D] p-2 lg:p-3 lg:pr-32 pr-24 rounded-lg'>
        <CiSearch className=' font-bold text-[20px] text-black' />
        <input onChange={changeHandler} type="text" className="opacity-75 border-none focus:outline-none" placeholder="Search Repositories" />
        </div>

        </div>
        </div>


        <div className=' h-fit w-full flex flex-col'>
             {newItems.map( (item, index) => (
                 <div key={index} className=' w-full h-[108px] flex items-center border border-[#6C6C6C4D] hover:bg-[#F5F5F5]'>
                   <div className=' w-fit h-fit pl-6 flex flex-col gap-3'>

                   <div className=' flex gap-2 items-end h-fit w-fit'>
                    <p className=' text-[16px] lg:text-[20px] font-medium'>{item.heading}</p>
                    <div className=' text-[10px] lg:text-[12px] w-fit h-fit rounded-full bg-blue-100 border border-[#B2DDFF] text-[#175CD3] px-2'>
                        {item.visibility}
                    </div>
                   </div>

                    <div className=' h-fit w-fit flex gap-9'>
                      <div className=' flex gap-2 items-center'>
                          <p className=' text-[12px] lg:text-[16px] font-normal'>{item.tech}</p>
                          <div className='h-2 w-2 rounded-full bg-[#1570EF]'></div>
                      </div>


                      <div className=' flex gap-2 items-center'>
                      <GoDatabase />
                      <p className=' text-[12px] lg:text-[16px] font-normal'>{item.memory}</p>
                      </div>

                      <div>
                          <p className=' text-[12px] lg:text-[16px] font-normal'>{item.update}</p>
                      </div>

                    </div>

                   </div>
                 </div>
             ))}
        </div>

    </div>
  )
}

export default Hero