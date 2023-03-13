import Layout from "../components/ui/Layout";

import { Route, Routes } from "react-router-dom";
import PersonalDetails from "../components/questions/PersonalDetails";
import EducationDetails from "../components/questions/EducationDetails";
import SkillDetails from "../components/questions/SkillDetails";
import WorkDetails from "../components/questions/WorkDetails";
import ResumeDiv from "../components/ResumeDiv";
import Templates from "../components/questions/Templates";

function Home() {


  return (
    <Layout>
    <div className="w-1/3 px-16">
    <Routes>
      {/* <Route path="/" element={<Navigate to="/edit/templates" replace />} /> */}
      <Route path="/edit/personal" element={<PersonalDetails />} />
      <Route path="/edit/education" element={<EducationDetails />} />
      <Route path="/edit/skills" element={<SkillDetails />} />
      <Route path="/edit/work" element={<WorkDetails />} />
      <Route path="/edit/templates" element={<Templates />} />
      {/* // <Home /> */}
    </Routes>
    </div>
      <ResumeDiv />
    </Layout>
  );
}

export default Home;
