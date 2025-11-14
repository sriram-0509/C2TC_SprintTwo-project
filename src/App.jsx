import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import CertificateList from "./pages/CertificateList.jsx";
import CertificateForm from "./pages/CertificateForm.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/certificates" element={<CertificateList />} />
        <Route path="/add" element={<CertificateForm />} />
        <Route path="/edit/:id" element={<CertificateForm />} />
      </Routes>
    </BrowserRouter>
  );
}
