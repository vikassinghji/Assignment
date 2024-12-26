
import logo from '../assets/logo.png';
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { IoCodeSlashOutline } from "react-icons/io5";
import { CiCloudOn } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useState } from 'react';
import { IoChevronUp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar = ({setColor}) => {

    const [opened, setOpened] = useState(false);
    const [isCrossOpened, setIsCrossOpened] = useState(false);

    const crossClickHandler = () => {
        setIsCrossOpened(!isCrossOpened);
        setOpened(!isCrossOpened);
    }

    const sidebarHandler = () =>{
       setOpened(!opened)
    }
 
    useGSAP( () =>{

        if(isCrossOpened  && opened && window.innerWidth<768){
            setColor('#6C6C6C4D')
        }
        else{
            setColor('#ffffff')
        }
          
        if(isCrossOpened || window.innerWidth>768){
            gsap.to('.sidebar', { opacity: 1, stagger: 0.2})
         }
         else{
            gsap.to('.sidebar', { opacity: 0, stagger: 0.2})
         }
          
          if(opened){
             gsap.to('.drop_down', { opacity: 1, height: '100%'})
          }
          else{
             gsap.to('.drop_down', { opacity: 0, height: 0})
          }

          const handleResize = () => {
            if (window.innerWidth < 768) {
              gsap.to('.sidebar', { opacity: 0, stagger: 0.2 });
            } else {
              gsap.to('.sidebar', { opacity: 1, stagger: 0.2 });
            }
          };
        
          // Add the event listener
          window.addEventListener('resize', handleResize);
        
          // Cleanup the event listener
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        
    }, [opened, isCrossOpened])

  return (
     <div className=' z-10 relative w-full md:w-[242px] h-fit md:max-h-[960px] bg-white flex flex-col justify-between pl-1  items-start my-3 mt-6 md:my-7 md:pb-6 '>
    
                 {/* <div className=' w-full h-[356px] flex flex-col item gap-1' > */}
    
                    <div className=' px-2 md:px-0 h-fit md:h-[92px] w-full md:w-fit flex flex-col gap-4 md:gap-2'>
                       <div className=' h-[20px] md:h-[32px] w-full flex md:justify-start justify-between items-center md:px-0 px-3'>
                        <div className='h-full w-fit flex justify-between items-center'>
                          <img src={logo} className=' w-[32px] h-[32px]'/>
                          <p className=' text-[24px]'>CodeAnt AI</p>
                        </div>

                        <div onClick={crossClickHandler} className='  h-5 w-5 flex justify-center items-center relative md:hidden md:justify-between'>
                             {isCrossOpened ? <RxCross1 className=' absolute h-full w-full' /> :<RxHamburgerMenu className=' absolute h-full w-full' />}
                        </div>

                        </div>
                        <button onClick={sidebarHandler} className=' mb-1 h-[35px] md:h-[25px] w-full md:w-fit text-sm flex justify-start  md:justify-between p-7 pb-[8px] md:pb-[9px] items-end gap-2 px-3 border border-gray-500 rounded-md sidebar'>
                            <p className=' text-[16px]'>Vikas kumar</p>
                            { opened ? <IoIosArrowDown /> : <IoChevronUp />}
                        </button>
                    </div>
                    
                    <div className=' w-full h-0 flex flex-col justify-start items-center gap-1 opacity-0 drop_down'>
                    <div className=' h-full w-full flex'>
                       <ul className=' px-2 md:px-0 h-full w-full flex flex-col'>
                        <li className=' h-[40px] md:h-[44px] w-[210px] cursor-pointer'>
                          <button className=' w-fit flex gap-1 items-center mt-1 bg-[#1570EF] text-white rounded-md px-3 py-1'>
                          <AiOutlineHome className=' text-[20px] font-medium' />
                          <p>Repositories</p>
                          </button>
                        </li>
                        <li className=' h-[40px] md:h-[44px] w-[210px] flex gap-1 items-center mt-1 font-medium cursor-pointer'>
                        <IoCodeSlashOutline className=' text-[18px] font-medium' />
                        <p>AI Code Review</p>
                        </li>
                        <li className=' h-[40px] md:h-[44px] w-[210px] flex items-center mt-1 gap-1 font-medium cursor-pointer'>
                        <CiCloudOn className=' text-[18px] font-medium' />
                        <p>Cloud Security</p>
                        </li>
                        <li className=' h-[40px] md:h-[44px] w-[210px] flex items-center mt-1 gap-1 font-medium cursor-pointer'>
                        <FaBook className=' text-[18px] font-medium' />
                        <p>How to Use</p>
                        </li>
                        <li className=' h-[40px] md:h-[44px] w-[210px] flex items-center mt-1 gap-1 font-medium cursor-pointer'>
                        <IoSettingsOutline className=' text-[18px] font-medium' />
                        <p>Setting</p>
                        </li>
                       </ul>
                    </div>
    
                    <div className=' w-full lg:h-[500px] h-0'></div>
                 {/* </div> */}
    
                 <div className=' w-full h-[112px] px-2 md:px-0'>
                    <div className='h-[40px] md:h-[44px] w-[210px] flex gap-1 items-center mt-1 font-medium cursor-pointer '>
                    <LuPhone className=' text-[18px] font-medium' />
                    <p>Support</p>
                    </div>
                    <div className='h-[40px] md:h-[44px] w-[210px] flex gap-1 items-center mt-1 font-medium cursor-pointer'>
                    <IoIosLogOut className=' text-[18px] font-bold' />
                    <p>Logout</p>
                    </div>
                 </div>
                 </div>
                  
              </div>
  )
}

export default Sidebar

