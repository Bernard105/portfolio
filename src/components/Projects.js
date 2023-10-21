import React from "react";
import aoequizz from "../assets/aoe-quizz.png";
import googleclone from "../assets/google-clone.png";
import eweb from "../assets/e-web.png";
import blogmarket from "../assets/blogmarket.png"

const Projects = () => {
  const projects = [
    {
      img: aoequizz,
      title: "aoe-quizz",
      desc: " Aoe question ",
      live: "https://aoequizz.vercel.app/",
      code: "https://github.com/Bernard105/aoequizz",
    },
    {
      img: googleclone,
      title: "google-clone",
      desc: "Fake display Google",
      live: "taidev105-github-io.vercel.app",
      code: "github.com/Bernard105/taidev105.github.io",
    },
    {
      img: eweb,
      title: "Ecommerce Website",
      desc: "Build Ecommerce Website",
      live: "lucky-tiramisu-a7df42.netlify.app",
      code: "github.com/Bernard105/webbanhang",
    },
    {
      img: blogmarket,
      title: "Blog",
      desc: "My Blog",
      live: "",
      code: "github.com/Bernard105/Blog-Market",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with React,
            MERN and vanilla CSS. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
