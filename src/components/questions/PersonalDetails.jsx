import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../ui/Input";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

function PersonalDetails() {
  const nameRef = useRef();
  const posRef = useRef();
  const urlRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const aboutRef = useRef();

  const navigate = useNavigate();

  async function submitHandeler(e){
      e.preventDefault();
      const email = localStorage.getItem('email')
      const docRef = doc(db, "users", email);
          const details = {
          name: nameRef.current.value,
          designation: posRef.current.value,
          url: urlRef.current.value,
          email: emailRef.current.value,
          phone: phoneRef.current.value,
          about: aboutRef.current.value,
        };
        console.log(details);
        await updateDoc(docRef, {
          personalDetails: details,
        });
      navigate('/edit/education')
  }

  return (
    <div className="personal-details question-container flex flex-col justify-center">
      <h3 className="pb-4 text-xl font-bold text-violet-400">
        Personal Details
      </h3>
      <form onSubmit={submitHandeler} className="">
        {/* {!ctx.isPersonalFilled && !isFilled && ( */}
        <div className="form-content flex flex-col">
          <Input required type="text" placeholder="Name" inputref={nameRef} />
          <Input
            required
            type="text"
            placeholder="Position"
            inputref={posRef}
          />
          <Input required type="text" placeholder="URL" inputref={urlRef} />
          <Input
            required
            type="email"
            placeholder="Email"
            inputref={emailRef}
          />
          <Input
            type="text"
            required
            placeholder="Phone Number"
            inputref={phoneRef}
            maxLength="10"
          />
          <textarea
            ref={aboutRef}
            placeholder="About Yourself(50 words)"
            rows="5"
            className="bg-transparent border-b-2 border-slate-600 focus:border-indigo-400 p-2 px4 my-2"
          />
        </div>

        <div className="flex w-full justify-between mt-8">
          <button
            onClick={() => {
              navigate("/edit/templates");
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

export default PersonalDetails;
