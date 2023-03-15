import { useDispatch, useSelector } from "react-redux";
import { templateAction } from "../../store";

function TemplateCard(props) {
  const dispatch = useDispatch();

  const tempateId = useSelector(state=>state.template.template)
  
  return (
    <div className={`col-6 `}>
    <div
      onClick={() => {
        dispatch(templateAction.setTemplate(props.template.id));
      }}
      className={` cursor-pointer flex border- border-[#1e1e1e] my-2 justify-center rounded-md bg-white ${tempateId === props.template.id && 'border-4 p-1 border-violet-400'}  `}
    >
      <img alt="resume-template" className="rounded-md h-full w-full" src={props.template.img} />
    </div></div>
  );
}

export default TemplateCard;
