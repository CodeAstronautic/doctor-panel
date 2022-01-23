import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Signup from "./components/Signup/signup";
import SignIn from "./components/SignIn/Signin";
import Home from "./components/Home/home";
import DoctorList from "./components/Doctors/doctorList";
import PatientList from "./components/Patients/patients";
import DoctorProfile from "./components/Doctors/doctorProfile";
import Profile from "./components/Profile/Profile";
import "antd/dist/antd.css";
import Profile2 from "./components/Profile/Profile2";
import Profile3 from "./components/Profile/Profile3";
import MainPage from "./components/Profile/MainPage";
import Calander from "./components/Calander/Calander";
import UserHome from "./UserPanel/Home/home";
import Appoitment from "./UserPanel/Appoitment";
import Patient2 from "./components/Patients/Patient2";
import { useEffect, useState } from "react";
import OTP from "./components/Signup/OTP";
import Commision from "./components/Commision/Commision";

const Main = () => {
  const [user, setuser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user_data")) {
      setuser(true);
    } else {
      setuser(false);
    }
  }, []);

  return (
    <>
      <Routes>
        {!user && (
          <>
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/SignIn" element={<SignIn />} />{" "}
            <Route exact path="/" element={<SignIn />} />{" "}
            <Route exact path="/otp" element={<OTP />} />{" "}
            {/* <Route path="*" element={<SignIn />} /> */}
          </>
        )}
        {user && (
          <>
            <Route exact path="/otp" element={<OTP />} />
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/main-profile" element={<MainPage />} />
            <Route exact path="/doctors" element={<DoctorList />} />
            <Route exact path="/doctorProfile" element={<DoctorProfile />} />
            <Route exact path="/patients" element={<PatientList />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/profile2" element={<Profile2 />} />
            <Route exact path="/profile3" element={<Profile3 />} />
            <Route exact path="/dashboard" element={<Home />} />
            <Route exact path="/calander" element={<Calander />} />
            <Route exact path="/patient2" element={<Patient2 />} />
            <Route exact path="/user-home" element={<UserHome />} />
            <Route exact path="/appoitment" element={<Appoitment />} />
            <Route exact path="/user-home" element={<UserHome />} />
            <Route exact path="/commision" element={<Commision />} />
          </>
        )}
        {/* <Route path="*" element={<SignIn />} /> */}
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

export default App;
