import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/harsha938`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="bg-gray-600 text-black text-center m-4 p-4 text-3xl">
      Github followers = {data.followers}
      <img src={data.avatar_url} width='300' alt="Avatar" />
    </div>
  );
}

export default Github;

export const githubLoader = async() => {
  const res = await fetch('https://api.github.com/users/harsha938')
  return res.json()
}