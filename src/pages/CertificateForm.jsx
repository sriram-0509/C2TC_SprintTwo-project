import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createCertificate, updateCertificate, getCertificateById } from "../services/certificateService";

export default function CertificateForm(){
  const {id}=useParams();
  const nav=useNavigate();
  const [f,setF]=useState({
    course_name:"",expiry_date:"",grade:"",
    institute:"",issue_date:"",student_name:""
  });

  const handle=e=>setF({...f,[e.target.name]:e.target.value});

  useEffect(()=>{
    if(id){
      getCertificateById(id).then(r=>setF(r.data));
    }
  },[id]);

  const save=()=>{
    const req = id ? updateCertificate(id,f) : createCertificate(f);
    req.then(()=>nav("/certificates"));
  }

  return(
    <div style={{padding:40}}>
      <h2>{id?"Edit":"Add"} Certificate</h2>
      {Object.keys(f).map(k=>(
        <div key={k}>
          <label>{k}:</label><br/>
          <input name={k} value={f[k]} onChange={handle} /><br/><br/>
        </div>
      ))}
      <button onClick={save}>Save</button>
    </div>
  );
}
