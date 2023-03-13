import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../ui/Input";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

function SkillDetails() {
  const skill1Ref = useRef();
  const skill2Ref = useRef();
  const skill3Ref = useRef();
  const skill4Ref = useRef();
  const skill5Ref = useRef();
  const skill6Ref = useRef();
  const navigate = useNavigate();

  async function submitHandeler(e) {
    e.preventDefault();

    const email = localStorage.getItem('email')
    const docRef = doc(db, "users", email);

    const skills = [
      skill1Ref.current.value,
      skill2Ref.current.value,
      skill3Ref.current.value,
      skill4Ref.current.value,
      skill5Ref.current.value,
      skill6Ref.current.value,
    ];
    await updateDoc(docRef, {
      skills: skills,
    });
    navigate('/edit/work')

  }

  return (
    <div className="personal-details question-container flex flex-col justify-center">
      <h3 className="pb-4 text-xl font-bold text-violet-400">Skill Details</h3>
      <form className="flex flex-col" onSubmit={submitHandeler}>
        {/* {!ctx.isSkillFilled && ( */}
        <div className="form-content flex flex-col">
          <Input type="text" placeholder="Skill 1" inputref={skill1Ref} />
          <Input type="text" placeholder="Skill 2" inputref={skill2Ref} />
          <Input type="text" placeholder="Skill 3" inputref={skill3Ref} />
          <Input type="text" placeholder="Skill 4" inputref={skill4Ref} />
          <Input type="text" placeholder="Skill 5" inputref={skill5Ref} />
          <Input type="text" placeholder="Skill 6" inputref={skill6Ref} />
        </div>
        {/* )} */}
        {/* {ctx.isSkillFilled && <p>You have alredy filled this</p>} */}

        <div className="flex w-full justify-between mt-8">
          <button
            onClick={()=>{
      navigate('/edit/education')

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

export default SkillDetails;
