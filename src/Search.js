import React, { useState } from "react";
import "./App.css"
import appointmentList from "./appointments.json"

export function Search() {

    const [searchTerm, setSearchTerm] = useState('')

    return (

        <>
            <div className="container mx-auto mt-4 mb-10 custom-padding">

                <div className="bg-blue-500">
                    <h1 className="text-center py-5 text-stone-50 font-medium text-lg">Search Appointment</h1>
                </div>

                <div className="border-cyan-500 border-2 px-3 py-3">

                    <input id="search-bar" type="search" onChange={event => { setSearchTerm(event.target.value) }} class="w-100 form-control relative flex-auto min-w-0 block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />

                    {/* <select className="inline-block custom-block float-right">
                        <option selected>Sort By</option>
                        <option value="1">Owner's Name</option>
                        <option value="2">Pet's Name</option>
                        <option value="3">Date of Birth</option>
                        <option value="4">Appointment Date</option>
                    </select> */}

                    <table class="border-collapse table-auto w-full text-sm">
                        <thead>
                            <tr className="tr border-b"><th className="text-sm text-gray-900 font-medium py-4 whitespace-nowrap">Owner</th><th className="text-sm text-gray-900 font-medium py-4 whitespace-nowrap">Pet</th><th className="text-sm text-gray-900 font-medium py-4 whitespace-nowrap">DOB</th><th className="text-sm text-gray-900 font-medium py-4 whitespace-nowrap">Date</th><th className="text-sm text-gray-900 font-medium py-4 whitespace-nowrap">Time</th></tr>
                        </thead>

                        <tbody>
                            {appointmentList.filter((val) => {
                                if (searchTerm === "") {
                                    return val;
                                } else if (val.ownersName.toLowerCase().includes(searchTerm.toLowerCase()) || val.petsName.toLowerCase().includes(searchTerm.toLowerCase()) || val.appointmentDate.toLowerCase().includes(searchTerm.toLowerCase()) || val.appointmentTime.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            }).map((appointment, key) => (
                                <tr key={key}>
                                    <td>{appointment.ownersName}</td>
                                    <td>{appointment.petsName}</td>
                                    <td>{appointment.dob}</td>
                                    <td>{appointment.appointmentDate}</td>
                                    <td>{appointment.appointmentTime}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>

            </div>
        </>

    )
}

export default Search;
