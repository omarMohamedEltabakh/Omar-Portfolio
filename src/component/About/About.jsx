import React, { useEffect } from "react";
import './About.css'
import me from "../../Assets/images/Me.png"
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";

export default function About() {




  useEffect(() => {

    const progressItems = document.querySelectorAll(".progress .learnProgress div");
    progressItems.forEach((span) => {
      span.style.width = span.dataset.width;
    });

  }, [])



  return <>
    <div className="about bg-slate-100">
      <div className="container mx-auto  ">

        <section className="about vh-100  flex items-center justify-center  space-x-8 pt-96 xl:pt-0   ">

          <div className="flex flex-col xl:flex-row  items-center">

            <div className=" w-3/6 xl:w-2/6  ">
              <img className="w-5/6 rounded-xl" src={me} alt="" />
            </div>

            <div className=" mt-14 xl:mt-0  w-100 xl:w-4/6 ">

              <h2 className="font-bold text-4xl">About Me.</h2>
              <p className="text-gray-500 text-2xl mt-2">Front End web developer</p>
              <p className="text-gray-500 text-xl mt-4 w-11/12 ">
                I'm Omar, a skilled front-end developer specializing in HTML, CSS, JavaScript, the
                MATERIAL-UI library, and React. With a strong commitment to precision  and
                creativity, I bring web projects to life. I stay updated on the latest trends, ensuring
                that I provide top-notch results.
              </p>

              <div className="flex flex-col  progress space-y-7 mt-6">

                <div className="h-6 learnProgress bg-slate-200 rounded-md prograss w-11/12 relative">
                  <div data-width="90%" className="absolute w-0   bg-black rounded-md top-0 left-0 right-0 bottom-0 flex items-center">
                    <div className="flex w-100 justify-between  px-5">
                      <h2 className="text-white">Script</h2>
                      <p className="text-white">90%</p>
                    </div>
                  </div>
                </div>

                <div className="h-6 learnProgress  bg-slate-200 rounded-md prograss w-11/12 relative">
                  <div data-width="100%" className="absolute w-0  bg-black rounded-md top-0 left-0 right-0 bottom-0 flex items-center">
                    <div className="flex w-100 justify-between  px-5">
                      <h2 className="text-white">React</h2>
                      <p className="text-white">100%</p>
                    </div>
                  </div>
                </div>

                <div className="h-6 learnProgress bg-slate-200 rounded-md prograss w-11/12 relative">
                  <div data-width="95%" className="absolute w-0  bg-black rounded-md top-0 left-0 right-0 bottom-0 flex items-center">
                    <div className="flex w-100 justify-between  px-5">
                      <h2 className="text-white">tailwind</h2>
                      <p className="text-white">95%</p>
                    </div>
                  </div>
                </div>

                <div className="h-6 learnProgress bg-slate-200 rounded-md prograss w-11/12 relative">
                  <div data-width="85%" className="absolute w-0  bg-black rounded-md top-0 left-0 right-0 bottom-0 flex items-center">
                    <div className="flex w-100 justify-between  px-5">
                      <h2 className="text-white">CSS</h2>
                      <p className="text-white">85%</p>
                    </div>
                  </div>
                </div>



                <div className="btns flex justify-center space-x-2 pb-10">
                  <Link to="">
                    <button className=" border border-black  hover:bg-black w-48 h-12 hover:text-white ease-in duration-150 rounded-lg">Download C.V</button>
                  </Link>
                  <Link to={"contact"}> <button className=" border border-black w-48 h-12 hover:bg-white bg-black text-white hover:text-black ease-in duration-150 rounded-lg">Contact Me</button></Link>
                </div>

              </div>



            </div>

          </div>

        </section>
      </div>
    </div>

  </>
}
