import { useState } from "react"

type AddDeviceProps={
    closeAddDevicePopup:()=>void
}
const AddDevice = ({closeAddDevicePopup}:AddDeviceProps)=>{
    const [isPopupOpen,setIsPopupOpen] = useState(false)
   return(<div className=" z-20    bg-black/[45%] fixed inset-0  items-center justify-center font-bold">
   <div className=" flex items-center justify-center h-full  scale-75 3xl:scale-100">
    
     <div className=" w-[1548px] h-[990px] bg-[#F5F5F5] px-[125px] py-[55px]  relative">
   {isPopupOpen&& <div className=" z-10 absolute bg-black/[45%] inset-0">
            <div className=" bg-white w-[585px] h-[260px] rounded-[5px] top-1/2 left-1/2 absolute translate-x-[-50%]  translate-y-[-50%] flex flex-col items-center justify-center space-y-10">
        <h1 className=" text-[28px] font-bold">DEVICE ADDED</h1>
        <img src="images/success.png" onClick={()=>{setIsPopupOpen(false)}} className="w-[51px] cursor-pointer" alt="" />
            </div>
</div>} 
     <div className=" flex justify-center items-center space-x-2">
        <h1 className=" text-center text-[28px] ">ADD NEW DEVICE</h1>
        <img src="/images/machine.png" className=" w-[26px] h-[34px]" alt="" />
        </div>
        <div className="flex flex-col space-y-[40px]">
        <div className=" space-y-[25px]"> 
            <h1 className="text-[22px] ">Basic Information</h1>
            <div className=" text-[#656565] flex text-[20px] space-x-10">
                <div className=" flex">
                    <h2>Device Name</h2>
                    <input type="text" className=" bg-[#F5F5F5] border-b-2 border-[#656565] focus:outline-0 text-black px-2" />
                </div>
                <div className=" flex">
                    <h2>Client Name</h2>
                    <input type="text" className=" bg-[#F5F5F5] border-b-2 border-[#656565] focus:outline-0 text-black px-2" />
                </div>
                <div className=" flex">
                    <h2>Device Number</h2>
                    <input type="text" className=" w-10 bg-[#F5F5F5] border-b-2 border-[#656565] focus:outline-0 text-black px-2" />
                </div>
            </div>
        </div>
        <div className=" space-y-[25px]"> 
            <h1 className="text-[22px] ">Location Information</h1>
            <div className=" text-[#656565] flex text-[20px] space-x-10">
                <div className=" flex">
                    <h2>NO.</h2>
                    <input type="text" className=" w-[85px] bg-[#F5F5F5] border-b-2 border-[#656565] focus:outline-0 text-black px-2" />
                </div>
                <div className=" flex">
                    <h2>Street Name</h2>
                    <input type="text" className=" bg-[#F5F5F5] border-b-2 border-[#656565] focus:outline-0 text-black px-2" />
                </div>
                <div className=" flex">
                    <h2>Suburb</h2>
                    <input type="text" className="  bg-[#F5F5F5] border-b-2 border-[#656565] focus:outline-0 text-black px-2" />
                </div>
                <div className=" flex">
                    <h2>State</h2>
                    <input type="text" className=" w-[135px] bg-[#F5F5F5] border-b-2 border-[#656565] focus:outline-0 text-black px-2" />
                </div>
            </div>
            <div className=" text-[#656565] flex text-[20px] space-x-10">
                <div className=" flex">
                    <h2>Country</h2>
                    <input type="text" className="  w-[213px] bg-[#F5F5F5] border-b-2 border-[#656565] focus:outline-0 text-black px-2" />
                </div>
                <div className=" flex">
                    <h2>Post Code</h2>
                    <input type="text" className="  w-[110px] bg-[#F5F5F5] border-b-2 border-[#656565] focus:outline-0 text-black px-2" />
                </div>
                <div className=" flex">
                    <h2>Email</h2>
                    <input type="text" className="  w-[213px] bg-[#F5F5F5] border-b-2 border-[#656565] focus:outline-0 text-black px-2" />
                </div>
                <div className=" flex">
                    <h2>Phone Number</h2>
                    <input type="text" className=" w-[213px]  bg-[#F5F5F5] border-b-2 border-[#656565] focus:outline-0 text-black px-2" />
                </div>
            </div>
        </div>
        <div className=" space-y-[25px]"> 
            <h1 className="text-[22px]  ">Device Serial Number </h1>
            <div className=" text-[#656565] flex text-[20px] space-x-10">
                <div className=" flex items-start ">
                    <h2 className="whitespace-nowrap">Serial Number</h2>
                    <input type="text" className=" w-[385px] bg-[#F5F5F5] border-b-2 border-[#656565] focus:outline-0 text-black px-2" />
                </div>
                <div className=" bg-white w-[767px] h-[114px]"></div>
            </div>
        </div>
        <div className=" space-y-[25px] "> 
            <h1 className="text-[22px] ">SIM Card Information</h1>
            <div className=" text-[#656565] flex text-[20px] space-x-10">
                <div className=" flex">
                    <h2>Phone Number</h2>
                    <input type="text" className=" bg-[#F5F5F5] border-b-2 border-[#656565] focus:outline-0 text-black px-2" />
                </div>
                <div className=" flex">
                    <h2>IMEI</h2>
                    <input type="text" className=" bg-[#F5F5F5] border-b-2 border-[#656565] focus:outline-0 text-black px-2" />
                </div>
                <div className=" flex">
                    <h2>SIM Serial Number</h2>
                    <input type="text" className=" w-10 bg-[#F5F5F5] border-b-2 border-[#656565] focus:outline-0 text-black px-2" />
                </div>
            </div>
        </div>
        <div className=" flex items-center justify-center space-x-[15%] pt-[40px]">
            <button onClick={closeAddDevicePopup} className=" w-[225px] h-[69px] text-center styled text-[24px]">CANCEL</button>
            <button onClick={()=>{setIsPopupOpen(true)}} className=" w-[225px] h-[69px] text-center styled text-[24px]">ADD</button>
        </div>
        </div>
     </div>
   </div>
   </div>) 
}
export default AddDevice