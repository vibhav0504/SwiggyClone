const Schimmer=()=>{
    return(
        <>
            <div className=" p-10 mx-5 flex flex-wrap justify-between">
                {Array(20).fill().map((e, index) => {
                    return <div key={index} className=" m-2 w-[200px] h-[200px] border-solid border-2 bg-white-900"></div>
                })}
            </div>
            
        </>
    )
}
export default Schimmer;