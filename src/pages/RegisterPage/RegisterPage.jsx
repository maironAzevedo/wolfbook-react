import React from "react";
import { ReactComponent as Friendship } from '../../assets/wfh_6.svg'
import SignUpForm from "./components/SignUpForm/SignUpForm";


function RegisterPage() {
  return (
    <>
    <div className="page-wrapper">
      <div className="text-dialog">
          <h1>Falta pouco para você fazer parte da nossa família!</h1>
          <Friendship className="img-home"/>
      </div>   
      <SignUpForm />
    </div>
    </>
  );
}

export default RegisterPage;
