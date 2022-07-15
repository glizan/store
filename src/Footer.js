import "./Footer.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
    return (
        <>
            <div className=" max-w-7xl justify-evenly items-center mx-auto h-3 sm:px-6 lg:px-8 nm-inset-gray-200-sm ">
            </div>
            <div className="flex justify-evenly items-center max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 border-t-4 border-white bg-slate-200 text-black ">
                <div className=" ">
                    <form className="p-1 bg-slate-200  " action="">
                        <div className="flex gap-4 place-content-start ">
                            <div>
                                <p>Subscribe to our newsletter</p>
                                <input type="email" name="email" id="email" placeholder="name@domain.com" required className="peer border-b-2 border-white bg-slate-200
                                          border-white outline-white ring-white focus:outline-none focus:ring-none  ">
                                </input>
                                <p className="invisible peer-invalid:visible text-black font-normal">
                                    Please enter a valid email address
                                </p>
                                <button type="submit" className="rounded-full nm-flat-gray-200 hover:nm-flat-gray-200-lg leading-5 px-8 py-4 uppercase font-bold tracking-widest transition duration-200 ease-in-out transform hover:scale-110">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </>
    );
}

