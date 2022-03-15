import React, { useEffect, useState } from "react";

const Book = () => {
    return (

        <>
            <div className="container mx-auto px-20 mt-4">
                <div className="bg-blue-500">
                    <h1 className="text-center py-5 text-stone-50 font-medium text-lg">Book an appointment</h1>
                </div>
                <div className="border-cyan-500 border-2">
                    <div className="grid-rows-3">
                        <div>
                            <input type="text" />
                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Book;