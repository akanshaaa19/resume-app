import { useDispatch, useSelector } from "react-redux";
import Resume01 from "../Templates/Resume01";
import { uiAction } from "../../store";
import ResumeModal from "./Resume";
import ReactToPrint from "react-to-print";
import { useEffect, useRef, useState } from "react";
import Resume02 from "../Templates/Resume02";
import Resume03 from "../Templates/Resume03";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Resume04 from "../Templates/Resume04";

function ResumeDiv() {
  const dispatch = useDispatch();
  
  const resumeVal = useSelector((state) => state.ui.showResume);

  function showResume() {
    dispatch(uiAction.showResume(true));
    //  console.log(resumeVal)
  }
  const componentRef = useRef();
  const template = useSelector((state) => state.template.template);

  const [resumedata, setResumeData] = useState();

  const [personal, setPersonal] = useState({});
  const [education, seteducation] = useState([]);
  const [work, setWork] = useState([]);
  const [skill, setskill] = useState([]);

  const email = localStorage.getItem("email");

  async function getUser(email) {
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return;
    }
  }

  useEffect(() => {
    getUser(email).then((data) => {
      setResumeData(data);
      setPersonal(data.personalDetails);
      seteducation(data.educationDetails);
      setWork(data.workDetails);
      setskill(data.skills);
    });
  }, [personal, education, skill, work]);

  return (
    <>
      {resumeVal && <ResumeModal />}
      <div className="resume-div overflow-auto hidden md:flex">
        <div className="bg-[#29292956] px-4 rounded-lg">
          <div className="flex justify-end pt-4 pb-3 static">
            {/* <ComponentToPrint ref={componentRef} /> */}

            <ReactToPrint
              trigger={() => (
                <button className="mr-12">
                  <i class="fa-solid fa-arrow-down mr-3"></i> Download
                </button>
              )}
              content={() => componentRef.current}
            />
            <button onClick={showResume} className=" font-medium ">
              Preview
            </button>
          </div>

          {template === "resume01" && (
            <Resume01
              personalDetails={personal}
              skills={skill}
              work={work}
              education={education}
              ref={componentRef}
            />
          )}
          {template === "resume02" && (
            <Resume02
              personalDetails={personal}
              skills={skill}
              work={work}
              education={education}
              ref={componentRef}
            />
          )}
          {template === "resume03" && (
            <Resume03
              personalDetails={personal}
              skills={skill}
              work={work}
              education={education}
              ref={componentRef}
            />
          )}
          {template === "resume04" && (
            <Resume04
              ref={componentRef}
              personalDetails={personal}
              skills={skill}
              work={work}
              education={education}
            />
          )}
        </div>
      </div>
      <div className="fixed md:hidden flex items-center justify-evenly p-4 bottom-0 w-screen">
        <button onClick={showResume} className="px-4 py-2 border-2 border-violet-400 rounded-lg">
          Preview
        </button>

        <ReactToPrint
          trigger={() => (
            <button className="px-4 py-2 border-2 border-violet-400 rounded-lg">
              Download
            </button>
          )}
          content={() => componentRef.current}
        />
      </div>
    </>
  );
}

export default ResumeDiv;
