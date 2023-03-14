import React from "react";
// import "./style.css";

const Resume04 = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="resume" className="bg-white  text-black rounded-lg px-8 py-24">
      <div className="sec-1 flex flex-col mt-4">
        <div>
          <p className="name text-4xl font-bold text-gray-900">
            {props.personalDetails.name}
          </p>
          <div className="designation text-2xl text-slate-500">
            {props.personalDetails.designation}
          </div>
        </div>
        <p className="flex items-center">
          <a
            href={`https://${props.personalDetails.url}`}
            className="mr-8"
            target="_blank"
          >
            {props.personalDetails.url}
          </a>
          <a href={`mailto:${props.personalDetails.email}`} className="mr-8">
            {props.personalDetails.email}
          </a>
          <p className="mb-0">{props.personalDetails.phone}</p>
        </p>
      </div>
      <div className="about mt-4">
        <h4 className="sec-heading font-medium text-lg">ABOUT</h4>
        <hr className="mb-4" />
        <p className="text-gray-700">{props.personalDetails.about}</p>
      </div>
      <div className="education mt-4">
        <h4 className="mt-4 font-medium sec-heading text-lg">EDUCATION</h4>
        <hr className="mb-4" />

        <div className="flex flex-row">
          {props.education.map((school) => {
            return (
              <div className="e1 mr-16">
                <p className="font-medium text-nowrap">{school.school}</p>
                <div className="text-gray-700">
                  <p>{school.degree}</p>
                  <p>{school.duration}</p>
                  <p>{school.gpa}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="skill mt-4">
        <h4 className="font-medium sec-heading text-lg">SKILLS</h4>
        <hr className="mb-4" />

        <div>
          <ul className="row list-disc list-inside">
            {props.skills.map((skill) => {
              return <li className="col-4">{skill}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="work mt-4">
        <h4 className="mt-4 font-medium sec-heading text-lg">WORK</h4>
        <hr className="mb-4" />

        {props.work.map((work) => {
          return (
            <div className="w1 text-gray-700 mb-4">
              <p className="font-medium text-nowrap text-black mb-0">{work.title}</p>
              <p className="text-base text-black">{work.org}</p>
              <p>{work.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
});

export default Resume04;
