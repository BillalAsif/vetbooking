import React from "react";

const Search = () => {
    return (

        <>
            <div className="container mx-auto mt-4 mb-10 custom-padding">
                <div className="bg-blue-500">
                    <h1 className="text-center py-5 text-stone-50 font-medium text-lg">Search Appointment</h1>
                </div>

                <div className="border-cyan-500 border-2 px-3 py-3">

                    <div className="static">

                        <p className="inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </p>

                        <input className="inline-block w-96" type="text" />

                        <select className="float-right inline-block custom-block">
                            <option selected>Filter By</option>
                            <option value="1">Owner's Name</option>
                            <option value="2">Pet's Name</option>
                            <option value="3">Date of Birth</option>
                            <option value="3">Appointment Date</option>
                        </select>

                    </div>

                </div>

            </div>
        </>

    )
}

export default Search;