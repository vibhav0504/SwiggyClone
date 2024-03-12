import React, { useEffect, useState } from 'react'
const useOnline = () => {
    const[isOnline,setIsOnLine]=useState(true);
useEffect(()=>{
    const handleOnline = () => {
        setIsOnLine(true);
      };
      const handleOffline = () => {
        setIsOnLine(false);
      };
      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);
    //   good practise is to remove event listener
    //   return () => {
    //     window.removeEventListener("online", handleOnline);
    //     window.removeEventListener("offline", handleOffline);
    //   }
},[]);

return isOnline;
};
export default useOnline;
