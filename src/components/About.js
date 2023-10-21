import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, I'm Tran Manh Tai. I'm aiming to become a full stack developer.
            I build beautiful websites with React and Tailwind CSS.
          </p>
          <p className="pb-5">
            I'm the wrong branch person who switched to IT and is looking for a
            job. In the frontend, I know Reactjs, Redux Vuejs, Pinia, Axios,
            Tailwind CSS, SaSS, and Css3.
          </p>

          <p>
            In the backend, I know Node.js, Express.js, MongoDB, and Mongoose.
          </p>

          <p>
            In my spare time, I'm practicing blogging about programming and
            writing blogs on my Blog. Where I talk about programming theory and
            build various projects.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
