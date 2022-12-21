const Login = (props:any)=>{
 return(
       <div className=" z-10    bg-black/[45%]  inset-0 fixed items-center justify-center ">
              <div className=" flex items-center justify-center h-full">

          
     
 <div className=" flex flex-col p-10 pb-12 bg-[#F5F5F5] text-[14px] font-bold rounded-[10px] w-[328px] h-[495px]  ">
        <h1 className=" text-xl text-center ">Account Login</h1>
        <div className=" flex flex-col mt-7 space-y-[10px]">
        <h2>Account Name:</h2>
        <input type="text" className="h-11 px-[10px] rounded-md inner-shadow2  border-b-2 border-r-2 border-white shadow-black" />
        </div>
        <div className=" flex flex-col mt-7 space-y-[10px]">
        <h2>Password:</h2>
        <input type="text" className="h-11 px-[10px] rounded-md inner-shadow2  border-b-2 border-r-2 border-white shadow-black" />
        </div>
        <button onClick={()=>{props.login(true)}} className="styled mt-[50px]  py-[13px]">Login</button>
        <button className="styled mt-7  py-[13px]">Send Password to Email</button>
       
 </div>
 </div>
 </div>)
}
export default Login