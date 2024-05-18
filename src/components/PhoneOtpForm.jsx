import React from "react";
import { useState } from "react";
import OtpInput from "./OtpInput";

const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpForm, setShowOtpForm] = useState(false);

  const handlePhone = (e) => {
    const number = e.target.value;
    const regex = /^[6-9]\d{9}$/;
    if (isNaN(number)) {
      return;
    }
    setPhoneNumber(number);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length < 10) {
      alert("Please enter valid phone number");
      return;
    }
    //api call
    setShowOtpForm(true);
  };

  const onOtpSubmit=(otp)=>{
console.log("login successfull",otp)
  }
  return (
    <>
    <h2>Login with OTP</h2>
      {!showOtpForm ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhone}
            placeholder="Please enter phone number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
        <h5>Enter OTP sent to {phoneNumber}</h5>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </>
      )}
    </>
  );
};

export default PhoneOtpForm;
