import { useNavigate } from "react-router-dom";

import resume01 from "../assets/resume-01.png"
import resume02 from "../assets/resume-02.png";
import resume03 from "../assets/resume-03.png";
import resume04 from '../assets/resume-04.png'
import TemplateCard from "../ui/TemplateCard";

const templates = [
  { img: resume01, id: "resume01" },
  { img: resume02, id: "resume02" },
  { img: resume03, id: "resume03" },
  { img: resume04, id: "resume04" },
];

function Templates() {
  const navigate = useNavigate();

  return (
    <div className="personal-details question-container flex flex-col justify-center">
      <h3 className="pb-4 text-xl font-bold text-violet-400">Templates</h3>
      <div className="row">
        {templates.map((template) => {
          return (
           <TemplateCard template={template} />
          );
        })}
      </div>
      <div className="flex w-full justify-between mt-8">
        <button
          className="border-2 border-violet-300 w-2/4 rounded p-2 mr-1 opacity-80"
          disabled
        >
          Previous
        </button>
        <button
          onClick={() => {
            navigate("/edit/personal");
          }}
          className="bg-violet-400 rounded p-2 w-2/4 ml-1"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Templates;
