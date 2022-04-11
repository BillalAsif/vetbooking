import React, { useState } from "react";
import "./App.css"

const Book = () => {

    const clearFields = {
        ownersName: '',
        petsName: '',
        dob: '',
        appDate: '',
        appTime: '',
        notes: ''
    }

    let [inputData, setInputData] = useState(clearFields);

    function saveData() {
        const appData = {
            ownersName: inputData.ownersName,
            petsName: inputData.petsName,
            dob: inputData.dob,
            appointmentDate: inputData.appDate,
            appointmentTime: inputData.appTime,
            notes: inputData.notes
        }

        setInputData(clearFields);

    }

    return (

        <>
            <div className="container mx-auto mt-4 custom-padding">

                <div className="bg-blue-500">
                    <h1 className="text-center py-5 text-stone-50 font-medium text-lg">Book an appointment</h1>
                </div>
                <div className="border-cyan-500 border-2">

                    <div className="grid grid-col-2">
                        <div><p className="inline-block py-5 ml-3">Owner's Name: </p><input onChange={(event) => { setInputData({ ...inputData, ownersName: event.target.value }) }} value={inputData.ownersName} className="float-right mt-3 mr-3 w-96 custom-block" type="text" /></div>
                        <div><p className="inline-block py-5 ml-3">Pet's Name: </p><input onChange={(event) => { setInputData({ ...inputData, petsName: event.target.value }) }} value={inputData.petsName} className="float-right mt-3 mr-3 w-96 custom-block" type="text" /></div>
                        <div><p className="inline-block py-5 ml-3">Date of birth: </p><input onChange={(event) => { setInputData({ ...inputData, dob: event.target.value }) }} value={inputData.dob} className="float-right mt-3 mr-3 w-96 custom-block" type="date" /></div>
                        <div><p className="inline-block py-5 ml-3">Appointment Date: </p><input onChange={(event) => { setInputData({ ...inputData, appDate: event.target.value }) }} value={inputData.appDate} className="float-right mt-3 mr-3 w-96 custom-block" type="date" /></div>
                        <div><p className="inline-block py-5 ml-3">Appointment Time: </p><input onChange={(event) => { setInputData({ ...inputData, appTime: event.target.value }) }} value={inputData.appTime} className="float-right mt-3 mr-3 w-96 custom-block" type="time" /></div>
                        <div><p className="inline-block py-5 ml-3">Notes: </p><textarea onChange={(event) => { setInputData({ ...inputData, notes: event.target.value }) }} value={inputData.notes} className="float-right mt-3 mr-3 mb-3 w-96 custom-block" type="textarea" /></div>
                    </div>

                    <div class="flex spac-x-2 justify-center py-5">
                        <div>
                            <button onClick={saveData} type="button" class="custom-save-btn inline-block w-96 px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Save</button>
                        </div>
                    </div>

                </div>

            </div>
        </>

    )
}

export default Book;