import React from "react";
// import "./style.css";

const Resume04 = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} id="resume" className="bg-white  text-black rounded-lg px-8 py-24">
      <div className="sec-1 flex flex-col mt-4">
        <div>
          <div className="text-4xl font-bold text-gray-900">
            {props.personalDetails.name}
          </div>
          <div className="text-2xl text-slate-500">
            {props.personalDetails.designation}
          </div>
        </div>
        <div className="flex items-center">
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
        </div>
      </div>
      <div className="about mt-4">
        <h4 className="font-medium text-lg">ABOUT</h4>
        <hr className="mb-4" />
        <p className="text-gray-700">{props.personalDetails.about}</p>
      </div>
      <div className="education mt-4">
        <h4 className="mt-4 font-medium text-lg">EDUCATION</h4>
        <hr className="mb-4" />

        <div className="flex flex-row">
          {props.education.map((school) => {
            return (
              <div className="e1 mr-16">
                <h6 className="font-medium text-nowrap">{school.school}</h6>
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
        <h4 className="font-medium text-lg">SKILLS</h4>
        <hr className="mb-4" />

        <div>
          <div className="row">
            {props.skills.map((skill) => {
              return <div className="col-4">{skill}</div>;
            })}
          </div>
        </div>
      </div>
      <div className="work mt-4">
        <h4 className="mt-4 font-medium text-lg">WORK</h4>
        <hr className="mb-4" />

        {props.work.map((work) => {
          return (
            <div className="w1 text-gray-700 mb-4">
              <h6 className="font-medium text-nowrap text-black mb-0">{work.title}</h6>
              <h6 className="text-base text-black">{work.org}</h6>
              <p>{work.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
});

export default Resume04;
