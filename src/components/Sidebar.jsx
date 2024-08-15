import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Context } from './Context/Context'


const Sidebar = () => {
    const { prevprom, setRecentprom, onsent,newChat } = useContext(Context)
    const [extended, setEctended] = useState(false);
    const loadprompt = async(prompt)=>{
        setRecentprom(prompt)
        await onsent(prompt)
    }
    const handleMenu = () => {
        setEctended(!extended)
    }
    return (
        <div className='hidden md:inline-flex  min-h-[100vh] flex-col justify-between bg-[#f0f4f9] py-6 px-2 '>
            <div className='TOP' >
                <img className='w-[27px] block ml-3 cursor-pointer' src={assets.menu_icon} onClick={handleMenu} alt="" />
                <div onClick={()=>newChat()} className='mt-6 inline-flex items-center gap-3 py-3 px-4 bg-[#e6eaf1] rounded-full text-sm text-gray-600 cursor-pointer hover:text-black hover:bg-gray-200 delay-75'>
                    <img className='w-[12px]' src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}

                </div>
                {extended ? <div className='flex flex-col'>
                    <p className='my-4'>Recent</p>
                    {prevprom.map((item,index)=>{
                        return(
                            <div onClick={()=>loadprompt(item)} className='flex items-start gap-2 p-2 pr-8 rounded-3xl text-[#282828] cursor-pointer text-base hover:bg-gray-200 delay-75 '>
                        <img className='w-[27px]' src={assets.message_icon} alt="" />
                        <p key={index}>{item.slice(0,15)}...</p>
                    </div>
                        )
                    })}
                    
                </div> : null}

            </div>


            <div className='flex flex-col'>
                <div className='flex items-start gap-2 p-2 rounded-3xl text-[#282828] cursor-pointer hover:bg-gray-200 delay-75'>
                    <img className='w-[27px]' src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className='flex items-start gap-2 p-2 rounded-3xl text-[#282828] cursor-pointer hover:bg-gray-200 delay-75'>
                    <img className='w-[27px]' src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}

                </div>
                <div className='flex items-start gap-2 p-2 rounded-3xl text-[#282828] cursor-pointer hover:bg-gray-200 delay-75'>
                    <img className='w-[27px]' src={assets.setting_icon} alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar