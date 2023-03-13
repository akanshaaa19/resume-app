import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../ui/Input";

import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

function EducationDetails() {
  const degree1Ref = useRef();
  const school1Ref = useRef();
  const duration1Ref = useRef();
  const cgpa1 = useRef();

  const degree2Ref = useRef();
  const school2Ref = useRef();
  const duration2Ref = useRef();
  const cgpa2 = useRef();
  const navigate = useNavigate();

  async function submitHandeler(e) {
    e.preventDefault();
    const email = localStorage.getItem('email')
    const docRef = doc(db, "users", email);
    const edu1 = {
      degree: degree1Ref.current.value,
      school: school1Ref.current.value,
      duration: duration1Ref.current.value,
      gpa: cgpa1.current.value,
    };

    const edu2 = {
      degree: degree2Ref.current.value,
      school: school2Ref.current.value,
      duration: duration2Ref.current.value,
      gpa: cgpa2.current.value,
    };
    // console.log(details);
    await updateDoc(docRef, {
      educationDetails: [edu1, edu2],
    });
    navigate("/edit/work");
  }

  return (
    <div className="personal-details question-container flex flex-col justify-center">
      <h3 className="pb-4 text-xl font-bold text-violet-400">
        Education Details
      </h3>
      <form onSubmit={submitHandeler} className="">
        {/* {!ctx.isEducationFilled && ( */}
        <div className="form-content flex flex-col">
          <Input type="text" placeholder="Degree Name" inputref={degree1Ref} />
          <Input type="text" placeholder="School Name" inputref={school1Ref} />
          <Input type="text" placeholder="Duration" inputref={duration1Ref} />
          <Input
            className="mb-4"
            type="text"
            placeholder="CGPA"
            inputref={cgpa1}
          />

          <div className="my-2"></div>

          <Input
            type="text"
            placeholder="Degree Name"
            inputref={degree2Ref}
            className="mt-8"
          />
          <Input type="text" placeholder="School Name" inputref={school2Ref} />
          <Input type="text" placeholder="Duration" inputref={duration2Ref} />
          <Input className="" type="text" placeholder="CGPA" inputref={cgpa2} />
        </div>
        {/* )}
       {ctx.isEducationFilled && <p>You have alredy filled this</p>} */}

        <div className="flex w-full justify-between mt-8">
          <button
            onClick={() => {
              navigate("/edit/personal");
            }}
            className="border-2 border-violet-300 w-2/4 rounded p-2 mr-1 opacity-80"
          >
            Previous
          </button>
          <button
            type="submit"
            className="bg-violet-400 rounded p-2 w-2/4 ml-1"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default EducationDetails;
