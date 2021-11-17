import React from "react";
import styled from "styled-components";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import svgHappy from '../../assets/images/happy.png'
import svgCry from '../../assets/images/crying.png'
import svgWarning from '../../assets/images/wonder.png'
interface ToastProps{
    type:string,
    message:string 
}
const Toast = styled(ToastContainer)`
  .Toastify__toast--info {
    background: "rgb(51, 102, 255)";
  }
  .Toastify__toast--success {
   border: 1px solid #1de71d ;
   background: #b1e2b1 ;

   color: black ;
 
}
.Toastify__toast--warning {
    border: 1px solid #f7d706;
    background: #ebde8d ;
   color: black ;

} 
  .Toastify__toast--error {
    border: 1px solid #EB5757;
    background: #FAE1E2 ;
   color: black ;

}
`;
export const showToast = ({ type, message }: ToastProps) => {
  switch (type) {
    case "success":
      toast.success(message,{
        icon: () =>  <img src={svgHappy} alt='happy kid'/>
      });
      break;
    case "error":
      toast.error(message,{
        icon: () => <img src={svgCry} alt='error kid'/>
      });
      break;
    case "warn":
      toast.warn(message, {
        icon: () => <img src={svgWarning} alt='error kid'/>
      });
      break;
    default:
      toast.info(message);
  }
};
export const ToastAnimated = () => {
  return <Toast/>;
}

