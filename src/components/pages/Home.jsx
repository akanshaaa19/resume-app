import Layout from "../ui/Layout";

import { Route, Routes } from "react-router-dom";
import PersonalDetails from "../questions/PersonalDetails";
import EducationDetails from "../questions/EducationDetails";
import SkillDetails from "../questions/SkillDetails";
import WorkDetails from "../questions/WorkDetails";
import ResumeDiv from "../ui/ResumeDiv";
import Templates from "../questions/Templates";

function Home() {


  return (
    <Layout>

    <div className="md:w-1/3 w-full px-16">
    <Routes>
      <Route path="/edit/templates" element={<Templates />} />
      <Route path="/edit/personal" element={<PersonalDetails />} />
      <Route path="/edit/education" element={<EducationDetails />} />
      <Route path="/edit/skills" element={<SkillDetails />} />
      <Route path="/edit/work" element={<WorkDetails />} />
    </Routes>
    </div>

      <ResumeDiv />
      
    </Layout>
  );
}

export default Home;
