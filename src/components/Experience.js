// import React from 'react';

// export const Experience = () => {
//   return (
//     <section className="experience" id="experience">
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <div className="experience-bx wow zoomIn">
//               <h2>Experience</h2>
//               <br></br>
//               <div className="experience-content">
//                 <h3>Bytewise React and Next JS Fellowship</h3>
//                 <p>
//                   During my internship at Bytewise, I worked on various projects using Tailwind CSS, HTML, CSS, and JavaScript. 
//                   These projects helped me gain practical experience in responsive web design and modern JavaScript frameworks like React and Next.js.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
// import React from 'react'

// const Experience = () => {
//     return (
//         <>
//             {/* <h2 className=" text-white text-2xl md:text-4xl font-bold text-center md:mt-20 mt-4">Experience</h2> */}
//             {/* <h2 className="text-[45px] font-bold text-center">
//   Experience
// </h2> */}
// <h2 className="custom-heading">
//   Experience
// </h2>


//             <div id='Experience' className='flex flex-col justify-center items-center gap-6 md:gap-2 mt-4 md:mt-0 m-8'>

//                 <div className='text-white bg-black shadow-xl bg-opacity-30 rounded-lg p-4 md:mb-4 md:mt-28 mt-4 md:mx-6'>
//                     <div className='flex gap-3 py-4 md:ml-20 md:mt-0 flex-col'>
//                         <h1 className='font-bold text-xl'>React & Next.Js Fellowship</h1>
//                         <p className='text-sm md:text-md leading-tight text-slate-600'>
//                             Bytewise Limited | June 2024 - August 2024
//                         </p>
//                         <p>
//                             It was an amazing oppurtunity to learn & deep dive into web development. During this fellowship,
//                             I had learnt a lot about web development, frontened technologies React , Material UI, Tailwind Css,
//                             and Next Js.
//                         </p>
//                     </div>
//                 </div>


//                 </div>

            
//         </>
//     )
// }

// export default Experience;


import React from 'react';

const Experience = () => {
  return (
    <>
      <h2 className="custom-heading">Experience</h2>
      
      <div className="parent flex flex-col items-center mt-8">
        <div className="experience-box p-6 w-[80%] border-2 border-purple bg-aqua">
          <div className="text-center">
            <h1 className="font-bold text-xl">Bytewise React and Next.JS Fellowship</h1>
            <p className="text-sm md:text-md leading-tight text-slate-600">
              Bytewise Limited | June 2024 - September 2024
            </p>
            <p>
            It was a fantastic opportunity to immerse myself in web development. During this fellowship, I gained extensive knowledge in web development, including advanced frontend technologies such as React, Material UI, Tailwind CSS, and Next.js.            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
