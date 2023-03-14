import React from "react";

const Resume02 = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="resume"
      className="bg-white  text-black rounded-lg px-8 py-24"
    >
      <div className="">
        <h1 className="name text-4xl mb-2 uppercase font-medium tracking-wide text-center">
          {props.personalDetails.name}
        </h1>
        <h3 className="text-slate-500 designation text-l uppercase text-center mb-4">
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
        <h1 className="sec-heading uppercase text-xl font-medium mb-3">About</h1>
        <p>{props.personalDetails.about}</p>
      </div>
      <hr className="my-4" />
      <div>
        <h1 className="sec-heading uppercase text-xl font-medium mb-3">Skills</h1>
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
        <h1 className="sec-heading uppercase text-xl font-medium mb-3">Education</h1>
        {props.education.map((school) => {
          return (
            <div className="mb-2">
              <p className="font-medium">
                {school.degree}, {school.school}
              </p>
              <p> {school.gpa} CGPA</p>
              <p>{school.duration}</p>
            </div>
          );
        })}
        
      </div>
      <hr className="my-4" />
      <div>
        <h1 className="sec-heading uppercase text-xl font-medium mb-3">Work Experience</h1>

        {props.work.map((work) => {
          return <div className="mb-2">
          <div className="flex justify-between font-medium">
            <p className="font-medium text-nowrap">{work.title}</p>
            <p>Month, Year - Month, Year</p>
          </div>
          <p className="text-sm">{work.org}</p>
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
