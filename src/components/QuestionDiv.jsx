import { Navigate, Route, Routes } from "react-router-dom";
import PersonalDetails from "./questions/PersonalDetails";
import EducationDetails from "./questions/EducationDetails";
import SkillDetails from "./questions/SkillDetails";
import WorkDetails from "./questions/WorkDetails";
import Templates from "./questions/Templates";

function QuestionDiv() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/edit/templates" replace />} />
      <Route path="/edit/personal" element={<PersonalDetails />} />
      <Route path="/edit/education" element={<EducationDetails />} />
      <Route path="/edit/skills" element={<SkillDetails />} />
      <Route path="/edit/work" element={<WorkDetails />} />
      <Route path="/edit/templates" element={<Templates />} />
      {/* // <Home /> */}
    </Routes>
  );
}

export default QuestionDiv;
