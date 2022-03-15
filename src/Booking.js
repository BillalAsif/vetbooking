import React, { useEffect, useState } from "react";

const Book = () => {
    return (

        <>
            <div className="container mx-auto px-20 mt-4">
                <div className="bg-blue-500">
                    <h1 className="text-center py-5 text-stone-50 font-medium text-lg">Book an appointment</h1>
                </div>
                <div className="border-cyan-500 border-2">

                    <div className="grid grid-rows-2 grid-flow-col gap-4">
                        <div><p className="inline-block">Name: </p><input className="float-right" type="text" /></div>
                        <div><p className="inline-block">Date of birth: </p><input className="float-right" type="date" /></div>
                        <div><p className="inline-block">Appointment Date: </p><input className="float-right" type="date" /></div>
                        <div><p className="inline-block">Appointment Time: </p><input className="float-right" type="time" /></div>
                    </div>

                    <div className="block">
                        <p className="inline-block">Notes: </p><textarea className="inline-block" type="textarea" />
                    </div>

                </div>
            </div>
        </>

    )
}

export default Book;