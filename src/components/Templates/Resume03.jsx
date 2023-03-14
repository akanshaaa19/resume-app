import React from "react";

const Resume03 = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="bg-white  text-black rounded-lg px-8 py-10"
      id="resume"
    >
      <div className="mb-8">
        <div className="flex items-center justify-between border-b-2 border-emerald-600 pb-2">
          <h1 className="name text-4xl font-extrabold text-emerald-500 text-nowrap">
            {props.personalDetails.name}
          </h1>
          <h3 className="designation uppercase tracking-wider text-xl">
            {props.personalDetails.designation}
          </h3>
        </div>
        <div className="flex justify-between text-sm pt-2">
          <a
            className="underline flex items-center"
            href={`https://${props.personalDetails.url}`}
          >
            {props.personalDetails.url}
          </a>
          <p>{props.personalDetails.phone}</p>
          <a
            className="underline flex items-center"
            href={`https://${props.personalDetails.email}`}
          >
            {props.personalDetails.email}
          </a>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex justify-between items-center pb-3">
          <h3 className=" text-xl sec-heading tracking-wider  text-emerald-600">About</h3>
          <div className="border-b-2 border-emerald-600 w-10/12" />
        </div>
        <p className="">{props.personalDetails.about}</p>
      </div>
      <div className="mb-6">
        <div className="flex justify-between items-center pb-3">
          <h3 className=" text-xl tracking-wider  text-emerald-600 sec-heading">Skills</h3>
          <div className="border-b-2 border-emerald-600 w-10/12" />
        </div>
        <ul className="row list-disc list-inside">
          {props.skills.map((skill) => {
            return <li className="col-3">{skill}</li>;
          })}
        </ul>
      </div>
      <div className="mb-6">
        <div className="flex justify-between items-center pb-3">
          <h3 className="sec-heading text-xl tracking-wider  text-emerald-600">
            Education
          </h3>
          <div className="border-b-2 border-emerald-600 w-9/12" />
        </div>
        {props.education.map((school) => {
          return (
            <div className="mb-2">
              <div className="flex justify-between font-medium">
                <p>{school.degree}</p>
                <p>{school.duration}</p>
              </div>
              <p> {school.school}</p>
            </div>
          );
        })}
      </div>
      <div className="mb-6">
        <div className="flex justify-between items-center pb-3">
          <h3 className="sec-heading text-xl tracking-wider  text-emerald-600">
            Work Experience
          </h3>
          <div className="border-b-2 border-emerald-600 w-8/12" />
        </div>

        {props.work.map((work) => {
          return (
            <div className="mb-3">
              <div className="flex justify-between font-medium">
                <p>{work.title}</p> <p>2020-2022</p>
              </div>
              <p className="text-sm pb-1">{work.org}</p>
              <p>
                {work.desc}
              </p>
            </div>
          );
        })}
        
      </div>
      {/* <div>
        <div className="flex justify-between items-center pb-3">
          <h3 className="sec-heading text-xl tracking-wider  text-emerald-600">
            Interests
          </h3>
          <div className="border-b-2 border-emerald-600 w-9/12" />
        </div>
        <ul className="row list-inside list-disc">
        {props.skills.map((skill) => {
              return <li className="col-4">{skill}</li>
            })}
        </ul>
      </div> */}
    </section>
  );
});

export default Resume03;
