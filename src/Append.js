import {Component, useEffect, useState} from "react";
import Header from "./Header";
import "./Append.css"
import axios from "axios";


function handleSubmit(event) {
    console.log(document.getElementById("device_id"))


    const pars = {
        device_code: document.getElementById("device_id").value,
        master_code: document.getElementById("master_id").value,
        owner_fullname: document.getElementById("fname").value,
        device_arrival_date: document.getElementById("arrival_date").value,
        breakdown_type: document.getElementById("breakdown_type").value,
        repairing_price: document.getElementById("price").value,
    }

    axios.post("http://localhost:3009/add_repairing", pars)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function Append() {
    const [masters, setMasters] = useState(null)
    const [devices, setDevices] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3009/get_masters")
            .then(response => response.json())
            .then(data => {
                    // console.log(data[0])
                    setMasters(data[0])
                    return () => {
                    }
                }
            )
            .catch((error) => console.log(error))
    }, [])

    useEffect(() => {
        fetch("http://localhost:3009/get_devices")
            .then(response => response.json())
            .then(data => {
                    // console.log(data[0])
                    setDevices(data[0])
                    return () => {
                    }
                }
            )
            .catch((error) => console.log(error))
    }, [])

    return (
        <>
            <Header next={[["/", "Database Overview"], ["/append_device", "Append devices"]]}/>
            <div className="card carder">
                <h5 className="text-center mb-4">Owner full name</h5>
                <form className="form-card" onSubmit={handleSubmit}>
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-6 flex-column d-flex"><label
                            className="form-control-label px-3">Owner full name<span
                            className="text-danger"> *</span></label>
                            <input type="text" id="fname" name="fname"
                                   placeholder="Enter customers full name"
                                   minLength="1" maxLength="40"/></div>
                        <div className="form-group col-sm-6 flex-column d-flex"><label
                            className="form-control-label px-3">Breakdown type<span
                            className="text-danger">*</span></label>
                            <input type="text" id="breakdown_type" name="breakdown_type"
                                   placeholder="Enter breakdown type"
                                   minLength="1" maxLength="40"/></div>
                    </div>
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-6 flex-column d-flex"><label
                            className="form-control-label px-3">Arrival date<span
                            className="text-danger"> *</span></label>
                            <input type="datetime-local" id="arrival_date"
                                   name="arrival_date"
                                   placeholder="Enter the date of device arrival"/></div>
                        <div className="form-group col-sm-6 flex-column d-flex"><label
                            className="form-control-label px-3">Repairing price<span
                            className="text-danger"> *</span></label>
                            <input type="number" min="1" step="any" id="price" name="price"
                                   placeholder="Enter price of repairing"/></div>
                    </div>
                    <div className=" row justify-content-between text-left">
                        <div className=" form-group col-sm-6 flex-column d-flex"><label
                            className=" form-control-label px-3">Choose broken device<span
                            className=" text-danger"> *</span></label>
                            <select id="device_id" name="device_id">
                                {devices === null ? "" : devices.map((device) => (
                                    <option value={device[0]}>{device[1]}
                                    </option>
                                ))
                                }
                            </select>
                        </div>
                        <div className=" form-group col-sm-6 flex-column d-flex"><label
                            className=" form-control-label px-3">Choose your dungeon master<span
                            className=" text-danger"> *</span></label>
                            <select id="master_id" name="master_id">
                                {masters === null ? "" : masters.map((master) => (
                                    <option value={master[0]}>
                                        {master.slice(1).join(" ")}</option>
                                ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className="form-group col-sm-6">
                            <button type="submit" className="btn-block btn-primary">Append</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}


export default Append;