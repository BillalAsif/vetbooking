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


                    <div class="mb-3 xl:w-96 inline-block custom-search">
                        <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">

                            <input id="search-bar" type="search" onChange={event => {setSearchTerm(event.target.value)}} class="form-control relative flex-auto min-w-0 block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />

                        </div>
                    </div>


                    <select className="inline-block custom-block float-right">
                        <option selected>Filter By</option>
                        <option value="1">Owner's Name</option>
                        <option value="2">Pet's Name</option>
                        <option value="3">Date of Birth</option>
                        <option value="3">Appointment Date</option>
                    </select>

                    {appointmentList.filter((val) => {
                        if (searchTerm === ""){
                            return val;
                        } else if(val.ownersName.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val;
                        }
                    }).map((appointment,key) => (
                        <div key={key} class="bg-indigo-100 rounded-lg py-5 px-6 mb-3 text-base text-indigo-700 inline-flex items-center w-full" role="alert">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
                            </svg>
                            {appointment.ownersName} - {appointment.petsName} - {appointment.dob} - {appointment.appointmentDate} - {appointment.appointmentTime}
                        </div>
                    ))}

                </div>

            </div>
        </>

    )
}

export default Search;
