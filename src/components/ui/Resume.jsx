import { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./main.css";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../../store";

import Resume01 from "../../Templates/Resume01";
import Resume02 from "../../Templates/Resume02";
import Resume03 from "../../Templates/Resume03";
import Resume04 from "../../Templates/Resume04";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

function ResumeOverlay(props) {
  const dispatch = useDispatch();
  const template = useSelector((state) => state.template.template);

  const [personal, setPersonal] = useState({});
  const [education, seteducation] = useState([]);
  const [work, setWork] = useState([]);
  const [skill, setskill] = useState([]);

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
  const email = localStorage.getItem("email");

    getUser(email).then((data) => {
      console.log(data);
      // setResumeData(data);
      setPersonal(data.personalDetails);
      seteducation(data.educationDetails);
      setWork(data.workDetails);
      setskill(data.skills);
    });
  }, []);

  return (
    <div className="resume-overlay">
      <div className=" absolute top-8 w-1012 right-12 flex items-center justify-end">
        <i
          onClick={() => {
            dispatch(uiAction.showResume(false));
          }}
          className="fa-solid fa-xmark fa-2x mr20 text-neutral-400 cursor-pointer"
        ></i>
        {/* <i class="fa-solid fa-arrow-down fa-2x text-neutral-400"></i> */}
      </div>
      <div className="overflow-auto h-full">
      {template === "resume01" && (
            <Resume01
              personalDetails={personal}
              skills={skill}
              work={work}
              education={education}
              // ref={componentRef}
            />
          )}
          {template === "resume02" && (
            <Resume02
              personalDetails={personal}
              skills={skill}
              work={work}
              education={education}
              // ref={componentRef}
            />
          )}
          {template === "resume03" && (
            <Resume03
              personalDetails={personal}
              skills={skill}
              work={work}
              education={education}
              // ref={componentRef}
            />
          )}
          {template === "resume04" && (
            <Resume04
              // ref={componentRef}
              personalDetails={personal}
              skills={skill}
              work={work}
              education={education}
            />
          )}
      </div>
    </div>
  );
}

function Backdrop(props) {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(uiAction.showResume(false));
      }}
      className="backdrop"
    >
      {props.children}
    </div>
  );
}

function ResumeModal() {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("overlay-hook")
      )}
      {ReactDOM.createPortal(
        <ResumeOverlay />,
        document.getElementById("overlay-hook")
      )}
    </Fragment>
  );
}

export default ResumeModal;
