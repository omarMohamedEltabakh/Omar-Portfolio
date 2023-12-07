import React from "react";
import './ContactUs.css'
import Lottie from "lottie-react";
import contactAnimation from "../../animation/contact.json"

export default function ContactUs() {


  return <>
    <div className="contact bg-slate-100">
      <div className="container mx-auto">
        <div className="vh-100 flex flex-wrap  items-center justify-between">

          <div className="w-full mt-40 md:mt-0  md:w-3/6  ">
            <form className="flex flex-col" action="">
              <input className=" h-10 px-2 border border-slate-300 bg-slate-50 shadow-3 rounded-md" type="text" placeholder="Name" />
              <input className=" h-10 px-2 border border-slate-300 bg-slate-50 shadow-3 rounded-md mt-4" type="text" placeholder="Email" />
              <textarea className="mt-4 pt-3 px-2 border border-slate-300 bg-slate-50 shadow-3 rounded-md" name="" id="" cols="30" rows="7" placeholder="Message"></textarea>
              <button className="hover:-translate-y-1  ease-in duration-150 bg-slate-950 text-white w-36 py-2 rounded-lg mt-4">SUBMIT</button>
            </form>
          </div>

          <div className=" hidden  md:w-2/6 md:flex">
            <Lottie animationData={contactAnimation} />
          </div>

        </div>
      </div>
    </div>

  </>
}
