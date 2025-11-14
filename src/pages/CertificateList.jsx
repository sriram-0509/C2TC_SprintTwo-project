import { useEffect, useState } from "react";
import { getCertificates, deleteCertificate } from "../services/certificateService";
import { useNavigate } from "react-router-dom";

export default function CertificateList(){
  const [list,setList]=useState([]);
  const nav = useNavigate();

  const load=()=>getCertificates().then(r=>setList(r.data));

  useEffect(()=>{load()},[]);

  return (
    <div style={{padding:40}}>
      <h2>Certificates</h2>
      <button onClick={()=>nav("/add")}>Add New</button>
      <table border="1" cellPadding="10" style={{marginTop:20}}>
        <thead>
          <tr>
            <th>ID</th><th>Course</th><th>Expiry</th><th>Grade</th>
            <th>Institute</th><th>Issue</th><th>Student</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map(c=>(
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.course_name}</td>
              <td>{c.expiry_date}</td>
              <td>{c.grade}</td>
              <td>{c.institute}</td>
              <td>{c.issue_date}</td>
              <td>{c.student_name}</td>
              <td>
                <button onClick={()=>nav("/edit/"+c.id)}>Edit</button>
                <button onClick={()=>{deleteCertificate(c.id).then(load)}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
