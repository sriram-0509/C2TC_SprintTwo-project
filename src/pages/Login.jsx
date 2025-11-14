import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  const [u,setU]=useState("");
  const [p,setP]=useState("");

  const login = () => {
    if(u==="admin" && p==="admin") nav("/certificates");
    else alert("Invalid login");
  };

  return (
    <div style={{padding:40}}>
      <h2>Login</h2>
      <input placeholder="Username" onChange={e=>setU(e.target.value)} /><br/><br/>
      <input placeholder="Password" type="password" onChange={e=>setP(e.target.value)} /><br/><br/>
      <button onClick={login}>Login</button>
    </div>
  );
}
