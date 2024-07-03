import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <>
      <div className="bg-orange-700 text-white p-3 rounded-lg" >User :{userid}</div>
    </>
  );
}

export default User;
