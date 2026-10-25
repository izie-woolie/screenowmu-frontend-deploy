import { Route, Routes } from "react-router";
import { Toast } from "@heroui/react";
import SplashScreen from "./pages/SplashScreen";
import Consent from "./pages/Consent";
import BasicProfile from "./pages/BasicProfile";
import { ProfileProvider } from "./context/ProfileContext";
import LocationProfile from "./pages/LocationProfile";
import DemoProfile from "./pages/DemoProfile";
import SmokerGate from "./pages/SmokerGate";
import SurveyOrigin from "./pages/SurveyOrigin";
import SurveyUsage from "./pages/SurveyUsage";
import SurveySpend from "./pages/SurveySpend";
import Dependence1 from "./pages/Dependence1";
import Dependence2 from "./pages/Dependence2";
import Readiness from "./pages/Readiness";
import Result from "./pages/Result";
import ClinicFinder from "./pages/ClinicFinder";

function App() {
  return (
    <ProfileProvider>
      <Toast.Provider placement="top" />
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/consent" element={<Consent />} />
        <Route path="/profile/basic" element={<BasicProfile />} />
        <Route path="/profile/location" element={<LocationProfile />} />
        <Route path="/profile/demo" element={<DemoProfile />} />
        <Route path="/smoker/gate" element={<SmokerGate />} />
        <Route path="/survey/origin" element={<SurveyOrigin />} />
        <Route path="/survey/usage" element={<SurveyUsage />} />
        <Route path="/survey/spend" element={<SurveySpend />} />
        <Route path="/dependence/1" element={<Dependence1 />} />
        <Route path="/dependence/2" element={<Dependence2 />} />
        <Route path="/readiness" element={<Readiness />} />
        <Route path="/result" element={<Result />} />
        <Route path="/clinics" element={<ClinicFinder />} />
      </Routes>
    </ProfileProvider>
  );
}

export default App;
