import React, { useEffect, useState } from "react";
import "./App.css"

const Book = () => {
    return (

        <>
            <div className="container mx-auto mt-4 custom-padding">

                <div className="bg-blue-500">
                    <h1 className="text-center py-5 text-stone-50 font-medium text-lg">Book an appointment</h1>
                </div>
                <div className="border-cyan-500 border-2">

                    <div className="grid grid-col-2">
                        <div><p className="inline-block py-5 ml-3">Owner's Name: </p><input className="float-right mt-3 mr-3 w-96 custom-block" type="text" /></div>
                        <div><p className="inline-block py-5 ml-3">Pet's Name: </p><input className="float-right mt-3 mr-3 w-96 custom-block" type="text" /></div>
                        <div><p className="inline-block py-5 ml-3">Date of birth: </p><input className="float-right mt-3 mr-3 w-96 custom-block" type="date" /></div>
                        <div><p className="inline-block py-5 ml-3">Appointment Date: </p><input className="float-right mt-3 mr-3 w-96 custom-block" type="date" /></div>
                        <div><p className="inline-block py-5 ml-3">Appointment Time: </p><input className="float-right mt-3 mr-3 w-96 custom-block" type="time" /></div>
                        <div><p className="inline-block py-5 ml-3">Notes: </p><textarea className="float-right mt-3 mr-3 mb-3 w-96 custom-block" type="textarea" /></div>
                    </div>

                    <div class="flex spac-x-2 justify-center py-5">
                        <div>
                            <button type="button" class="custom-save-btn inline-block w-96 px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Save</button>
                        </div>
                    </div>

                </div>

            </div>
        </>

    )
}

export default Book;