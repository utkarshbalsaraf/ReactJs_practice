import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData()
  // const [data, setdata] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setdata(data);
  //     });
  // }, []);
  return (
    <>
      <div className="text-center m-4 bg-orange-700 text-white p-4 text-3xl rounded-xl">
        Github Followers : {data.followers}
      </div>
      <div className="inline-flex">
        <img
          src={data.avatar_url}
          alt="Github picture"
          width={200}
          className=" rounded-xl"
        />
      </div>
    </>
  );
}

export default Github;
export const gtihubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
