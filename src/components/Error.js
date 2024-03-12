import { useRouteError } from "react-router-dom";
const Error=()=>{
  const err=useRouteError();
  console.log(err);
  const{status,statusText}=err;
 return (
  <>
<h3 >OOPS!</h3>
    <h4>Something Went Wrong!!</h4>
    <p>{status}</p>
    <p>{statusText}</p>
  </>
 ) 
};
export default Error;