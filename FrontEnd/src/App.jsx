
import { useState } from "react";
import DonorPage from "./pages/DonorPage";
import PatientPage from "./pages/PatientPage";
import HospitalPage from "./pages/HospitalPage";
const App = () => {

  const [userType, setUserType] = useState("donor")
  return (

  <div>
    {userType === "donor" && <DonorPage />}
    {userType === "patient" && <PatientPage />}
    {userType === "hospital" && <HospitalPage />}
  </div>
)};

export default App;
