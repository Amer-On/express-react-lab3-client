import Header from "./Header";
import {Component, useEffect} from "react";
import "axios";
import axios from "axios";

class AppendDevice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name_of_device: '',
            type_of_device: "",
            production_date: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let s = this.state
        s[event.target.name] = event.target.value
        this.setState(s);
    }

    handleSubmit(event) {
        console.log(this.state)
        event.preventDefault();

        axios.post("http://localhost:3009/add_device", this.state)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    render() {
        return (
            <>
                <Header next={[["/", "Database Overview"], ['/append', 'Append Database']]}/>
                <div className="card carder">
                    <h5 className="text-center mb-4">Device Appending</h5>
                    <form className="form-card" onSubmit={this.handleSubmit}>
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-sm-6 flex-column d-flex"><label
                                className="form-control-label px-3">Device name<span
                                className="text-danger"> *</span></label>
                                <input type="text" id="name_of_device" name="name_of_device"
                                       placeholder="Enter device name" value={this.state.name_of_device}
                                       onChange={this.handleChange}
                                       minLength="1" maxLength="40"/></div>
                            <div className="form-group col-sm-6 flex-column d-flex"><label
                                className="form-control-label px-3">Device type<span
                                className="text-danger">*</span></label>
                                <input type="text" id="type_of_device" name="type_of_device"
                                       value={this.state.type_of_device}
                                       placeholder="Enter device type"
                                       onChange={this.handleChange}
                                       minLength="1" maxLength="15"/></div>
                        </div>
                        <div className="row justify-content-between text-left">
                            <div className="form-group col-sm-6 flex-column d-flex"><label
                                className="form-control-label px-3">Device production date<span
                                className="text-danger"> *</span></label>
                                <input type="datetime-local" id="production_date"
                                       onChange={this.handleChange}
                                       name="production_date" value={this.state.production_date}
                                       placeholder="Enter the date of device production"/></div>
                        </div>
                        <div className="row justify-content-end">
                            <div className="form-group col-sm-6">
                                <button type="submit" className="btn-block btn-primary center">Add device</button>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default AppendDevice;