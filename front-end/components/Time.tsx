
const Time = ()=>{
    const date = new Date();
    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    
    return<div className="flex flex-col w-[241px] h-[92px] py-[10px] pl-[25px] pr-5 bg-[#F5F5F5] rounded-[5px]   absolute z-10   top-[5%]  right-[4%] scale-75 2xl:scale-100 ">
            <div className=" flex justify-end items-center space-x-[25px]">
                <p className=" text-[20px] font-bold">GMT{(date.getTimezoneOffset()/60)*-1>=0?"+":"-"}{(date.getTimezoneOffset()/60)*-1}</p>
                <p className=" text-[40px] font-light leading-none">{date.getHours()}:{date.getMinutes()===0?"00":date.getMinutes()}</p>
            </div>
            <div className=" text-[20px] font-medium flex justify-end">
            {weekday[date.getDay()]}  {date.getDate()} {month[date.getMonth()]} {date.getFullYear()}
            </div>
</div>
}
export default Time