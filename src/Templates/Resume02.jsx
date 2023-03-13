import React from "react";

const Resume02 = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="resume"
      className="bg-white  text-black rounded-lg px-8 py-24"
    >
      <div className="">
        <h1 className="text-4xl mb-2 uppercase font-medium tracking-wide text-center">
          {props.personalDetails.name}
        </h1>
        <h3 className="text-slate-500 text-l uppercase text-center mb-4">
          {props.personalDetails.designation}
        </h3>
        <div className="text-center text-sm">
          <p>
            <a
              href={`https://${props.personalDetails.url}`}
              className="underline"
            >
              {props.personalDetails.url}
            </a>
            | {props.personalDetails.phone} |
            <a
              href={`mailto:${props.personalDetails.email}`}
              className="underline"
            >
              {props.personalDetails.email}
            </a>
          </p>
        </div>
      </div>
      <hr className="my-4" />
      <div className="">
        <h1 className="uppercase text-xl font-medium mb-3">About</h1>
        <p>{props.personalDetails.about}</p>
      </div>
      <hr className="my-4" />
      <div>
        <h1 className="uppercase text-xl font-medium mb-3">Skills</h1>
        <div className="flex items-center justify-between mx-8">
          <ul className="row list-disc justify-between w-100">
            {props.skills.map((skill) => {
              return <li className="col-3">{skill}</li>;
            })}
          </ul>
        </div>
      </div>
      <hr className="my-4" />

      <div>
        <h1 className="uppercase text-xl font-medium mb-3">Education</h1>
        {props.education.map((school) => {
          return (
            <div className="mb-2">
              <h1 className="font-medium">
                {school.degree}, {school.school}
              </h1>
              <p> {school.gpa} CGPA</p>
              <p>{school.duration}</p>
            </div>
          );
        })}
        
      </div>
      <hr className="my-4" />
      <div>
        <h1 className="uppercase text-xl font-medium mb-3">Work Experience</h1>

        {props.work.map((work) => {
          return <div className="mb-2">
          <div className="flex justify-between font-medium">
            <h1 className="font-medium">{work.title}</h1>
            <p>Month, Year - Month, Year</p>
          </div>
          <h1 className="text-sm">{work.org}</h1>
          <p className="text-sm">
          {work.desc}
          </p>
        </div>
        })}
        
      </div>
    </section>
  );
});

export default Resume02;
