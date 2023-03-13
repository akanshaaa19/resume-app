import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../ui/Input";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

function WorkDetails() {
  const titleRef1 = useRef();
  const orgRef1 = useRef();
  const descRef1 = useRef();

  const titleRef2 = useRef();
  const orgRef2 = useRef();
  const descRef2 = useRef();
  const navigate = useNavigate();

  async function submitHandeler(e){
    e.preventDefault();
    const email = localStorage.getItem('email')
    const docRef = doc(db, "users", email);

    const work1 = {
      title: titleRef1.current.value,
      org: orgRef1.current.value,
      desc: descRef1.current.value,
    };

    const work2 = {
      title: titleRef2.current.value,
      org: orgRef2.current.value,
      desc: descRef2.current.value,
    };

    await updateDoc(docRef, {
      workDetails: [work1, work2],
    });

  }

  return (
    <div className="personal-details question-container flex flex-col justify-center">
      <h3 className="pb-4 text-xl font-bold text-violet-400">Work Details</h3>
      <form onSubmit={submitHandeler} className="">
        {/* {!ctx.isWorkFilled && ( */}
        <div className="form-content flex flex-col">
          <Input type="text" placeholder="Job Title" inputref={titleRef1} />
          <Input type="text" placeholder="Company Name" inputref={orgRef1} />
          <Input
            className="mb-3"
            type="text"
            placeholder="Job Description"
            inputref={descRef1}
          />

          <div className="my-2"></div>

          <Input
            type="text"
            placeholder="Job Title"
            inputref={titleRef2}
            className="mt-8"
          />
          <Input type="text" placeholder="Company Name" inputref={orgRef2} />
          <Input
            className="mb-3"
            type="text"
            placeholder="Job Description"
            inputref={descRef2}
          />
        </div>
        {/* )} */}
        {/* {ctx.isWorkFilled && <p>You have alredy filled this</p>} */}

        <div className="flex w-full justify-between mt-8">
          <button
            onClick={() => {
              navigate("/edit/education");
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

export default WorkDetails;
