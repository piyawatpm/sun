const Login = ()=>{
 return(<div className=" flex flex-col p-10 pb-12 bg-[#F5F5F5] text-[14px] font-bold rounded-[10px] w-[328px] h-[495px]">
        <h1 className=" text-xl text-center ">Account Login</h1>
        <div className=" flex flex-col mt-7 space-y-[10px]">
        <h2>Account Name:</h2>
        <input type="text" className="h-11 px-[10px] rounded-md inner-shadow2  border-b-2 border-r-2 border-white shadow-black" />
        </div>
        <div className=" flex flex-col mt-7 space-y-[10px]">
        <h2>Password:</h2>
        <input type="text" className="h-11 px-[10px] rounded-md inner-shadow2  border-b-2 border-r-2 border-white shadow-black" />
        </div>
        <button className=" mt-[50px] drop-shadow-button shadow-md border-t-[3px] hadow-gray-300 border-l-[3px] border-white rounded-md bg-[#F5F5F5] py-[13px]">Login</button>
        <button className=" mt-7 drop-shadow-button shadow-md border-t-[3px] hadow-gray-300 border-l-[3px] border-white rounded-md bg-[#F5F5F5] py-[13px]">Send Password to Email</button>
       
 </div>)
}
export default Login