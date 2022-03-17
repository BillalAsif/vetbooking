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
                        <div><p className="inline-block py-5 ml-3">Name: </p><input className="float-right mt-3 mr-3 w-96 custom-block" type="text" /></div>
                        <div><p className="inline-block py-5 ml-3">Date of birth: </p><input className="float-right mt-3 mr-3 w-96 custom-block" type="date" /></div>
                        <div><p className="inline-block py-5 ml-3">Appointment Date: </p><input className="float-right mt-3 mr-3 w-96 custom-block" type="date" /></div>
                        <div><p className="inline-block py-5 ml-3">Appointment Time: </p><input className="float-right mt-3 mr-3 w-96 custom-block" type="time" /></div>
                        <div><p className="inline-block py-5 ml-3">Notes: </p><textarea className="float-right mt-3 mr-3 mb-3 w-96 " type="textarea" /></div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Book;