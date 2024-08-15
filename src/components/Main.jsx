import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Context } from './Context/Context'

const Main = () => {
  const { prevprom,
    setprevprom,
    recentprom,
    setRecentprom,
    showresult,
    input,
    setInput,
    loading,
    resultdata, onsent } = useContext(Context)

  return (
    <>
      <div className='flex-1 min-w-[50vw] min-h-[100vh] relative pb-[15vh] '>
        <div className='flex items-center justify-between text-xl px-3 py-2 font-medium'>
          <img className='w-[90px]' src={assets.logo} alt="" />
          <img className='w-[40px] rounded-full' src={assets.user_icon} alt="" />
        </div>
        <div className='main-container lg:max-w-[900px] m-auto '>
          {!showresult ? <><div className='greet text-xl mx-4 my-10 lg:m-10 md:text-3xl lg:text-5xl text-gray-400 lg:p-5'>
            <p className='mb-2'><span className=''>Hello, Welcome ... </span></p>
            <p>How can i solve your problem ?</p>
          </div>
            <div className="cards mt-[8vh] flex items-center overflow-x-auto gap-3 snap-x px-1 text-sm ">
              <div className="card min-w-[190px] px-2 snap-center py-5 ">
                <p>What is the most fuel-efficient car available today? </p>
                <img className="w-[29px] mt-1" src={assets.bulb_icon} alt="" />
              </div>
              <div className="card min-w-[190px] px-2 snap-center py-5 ">
                <p>What are the most common design patterns used in software development?</p>
                <img className="w-[37px] mt-1" src={assets.code_icon} alt="" />
              </div>
              <div className="card min-w-[190px] px-2 snap-center py-5 ">
                <p>What are the common sources of error in compass readings and how can they be corrected?</p>
                <img className="w-[30px] mt-1" src={assets.compass_icon} alt="" />
              </div>
              <div className="card min-w-[190px] px-2 snap-center py-5 ">
                <p>How does emotional intelligence influence our interactions and relationships with others?</p>
                <img className="w-[30px] mt-1" src={assets.message_icon} alt="" />
              </div>
            </div></> : <div className='result px-2 max-h-[75vh] text-lg overflow-y-scroll'>
            <div className='result-title flex items-center pt-5 '>
              <img className="w-[50px] rounded-full mr-3" src={assets.user_icon} alt="" />
              <p>{recentprom}</p>
            </div>
            <div className='result-data pt-3'>
              {loading ? <div className='mt-0'>
                <div className="relative flex w-64 animate-pulse gap-2 p-4">
                  <div className="h-12 w-12 rounded-full bg-slate-400"></div>
                  <div className="flex-1">
                    <div className="mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg"></div>
                    <div className="h-5 w-[90%] rounded-lg bg-slate-400 text-sm"></div>
                  </div>
                  <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"></div>
                </div></div> : <p className='text-sm md:text-base' dangerouslySetInnerHTML={{ __html: resultdata }}></p>}

            </div>
          </div>}



          <div className="main-bottom absolute bottom-4 w-full max-w-[900px] px-3 ">
            <div className="serchbox flex justify-between items-center gap-2 bg-[#f0f4f9] px-[20px] py-[10px] rounded-lg">
              <input onChange={(e) => setInput(e.target.value)} value={input} className='text-sm  bg-[#f0f4f9] outline-none w-full' type="text" placeholder='Enter the prompt Here ...' />
              <div>
                <img onClick={() => onsent()} className='w-8' src={assets.send_icon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main