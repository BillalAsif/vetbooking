import React from "react";
import "./App.css";

const Header = () => {

    return (
        <>
            <div className="tracking-wide grid mix-blend-multiply bg-blue-500 justify-items-center">

                <h1 className="my-5 font-serif tracking-wide text-2xl font-semibold te-yellow-500 shadow-yellow">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-yellow-500 inline-block h-7 w-10 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Vet Care System
                </h1>

            </div>
        </>
    )

}

export default Header;