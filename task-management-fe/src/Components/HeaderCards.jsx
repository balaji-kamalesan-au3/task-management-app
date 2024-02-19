export default function HeaderCard(props){
  return(
    <div className="min-h-[75px] w-[319px] border-solid  border-gray-700 border-[1px] rounded-[5px] bg-white" >
      {/* First Row */}
      <div className={`h-[10px] w-[63px] bg-[${props.color}] my-[10px] mx-[10px] rounded-[5px]`} >
      </div>
      {/* Second Row */}
      <div className="w-[100%]  flex justify-between px-[10px] items-center">
        <div>{props.text}</div>
      </div>
    </div>
  )
}