import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);

  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);

  //   console.log(inputRef.current[2].value, "inputRef");

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if(value&&index<length-1&&inputRef.current[index+1]){
        inputRef.current[index+1].focus()
    }

    const combinedOtp=newOtp.join("");
    if(combinedOtp.length===length){
        onOtpSubmit(combinedOtp);
    }

  };

  const handleKeyDown=(e,index)=>{

    console.log("OTP",otp[index])
    if(e.key==="Backspace" && !otp[index]&& index>0&&inputRef.current[index-1]){
        inputRef.current[index-1].focus()
    }
  }

  const handleClick=(index)=>{
    console.log("clickedd")
    inputRef.current[index].setSelectionRange(1,1);

   

    if(index>0&& !otp[index-1]){
        console.log("condition")
        inputRef.current[otp.indexOf("")].focus()
    }
  }

  return (
    <>
      {otp.map((itm, index) => (
        <input
          ref={(input) => (inputRef.current[index] = input)}
          value={itm}
          onChange={(e) => handleOtpChange(e, index)}
          onKeyDown={(e)=>handleKeyDown(e,index)}
          onClick={()=>handleClick(index)}
          type="text"
          key={index}
          className="otp-input"
        />
      ))}
    </>
  );
};

export default OtpInput;
