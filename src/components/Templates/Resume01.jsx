import React from "react";

const Resume01 = React.forwardRef((props, ref) => {

  return (
    <section ref = {ref} className="bg-white text-black rounded-lg px-8 py-24" id="resume">
      <div>
      <div className="row mb-8">
        <div className="col-6">
          <h1 className="text-4xl name font-extrabold text-blue-900 text-nowrap">
          {props.personalDetails.name}
          </h1>
          <h3 className="designation text-slate-500 text-2xl">{props.personalDetails.designation}</h3>
        </div>
        <div className="col-6 text-right"></div>
      </div>
      <div className="row justify-between pb6">
        <div className=" col-3">
          <h1 className="sec-heading text-2xl font-bold text-blue-900">About</h1>
        </div>
        <div className=" col-8">
          <p className="border-t-2 py-4 border-slate-300">
          {props.personalDetails.about}
          </p>
        </div>
      </div>

      <div className="row justify-between">
        <div className=" col-3">
          <h1 className="sec-heading text-2xl font-bold text-blue-900">Education</h1>
        </div>
        <div className=" col-8">
          <div className="border-y-2 py-4 border-slate-300 ">
          {props.education.map((school)=>{
            return <div className="mb-2">
              <p className="font-medium text-blue-800">
              {school.degree}, {school.school}
              </p>
              <p>{school.duration}</p>
            </div>
          })}

          </div>
        </div>
      </div>

      <div className="row justify-between">
        <div className=" col-3">
          <h1 className="text-2xl sec-heading font-bold text-blue-900">Expirience</h1>
        </div>
        <div className=" col-8">
          <div className="border-b-2 py-4 border-slate-300 ">
          {props.work.map((work) => {
          return (
            <div className="mb-2 row">
              <div className="col-6">
                <p className="font-medium text-nowrap text-blue-800 text-lg">
                  {work.title}
                </p>
                <p className="text-sm text-zinc-700 font-medium">
                  {work.org}
                </p>
                {/* <p className="text-sm text-slate-400">May 2020 to present</p> */}
              </div>
              <div className="col-6">
                <p className="text-sm">
                  {work.desc}
                </p>
              </div>
            </div>
          );
        })}
            
          </div>
        </div>
      </div>

      <div className="row justify-between pb6">
        <div className=" col-3">
          <h1 className="text-2xl sec-heading font-bold text-blue-900">Skills</h1>
        </div>
        <div className="col-8">
          <div className="border-b-2 py-4 border-slate-300">
            <ul className="row list-disc">
            {props.skills.map((skill) => {
              return <li className="col-3">{skill}</li>
            })}
              
            </ul>
          </div>
        </div>
      </div>

      <div className="row justify-between pb6">
        <div className=" col-3">
          <h1 className="text-2xl sec-heading font-bold text-blue-900">Contact</h1>
        </div>
        <div className=" col-8">
          <div className="border-b-2 py-4 border-slate-300 row">
            <div className=" flex items-center pb-2">
              <div>
                <i className="fa-solid fa-phone fa-lg mr-2"></i>
              </div>
              9425010449
            </div>
  
            <a href={`mailto:${props.personalDetails.email}`} className="underline  flex items-center pb-2">
          
              <div>
                <i className="fa-solid fa-envelope fa-lg mr-2"></i>
              </div>
              {props.personalDetails.email}
            </a>
            <a
              className="underline flex items-center"
              href={`https://${props.personalDetails.url}`}
            >
              <div className="">
                <i className="fa-solid fa-link fa-lg mr-2"></i>
              </div>
              {props.personalDetails.url}
            </a>
            <br />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
})

export default Resume01;
