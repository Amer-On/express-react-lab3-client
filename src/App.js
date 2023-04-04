import {useEffect, useState} from "react";
import DBTable from "./Table";
import "./App.css"
import Header from "./Header";

const gifLink = "https://cdn.dribbble.com/users/1299339/screenshots/11116681/media/79bf1ac602445860e4a44bcd4bf80704.gif"

function App() {
    const [abonents, setAbonents] = useState(null)
    const [colNames, setColNames] = useState(null)

    useEffect(() => {
        // fetch data
        fetch('http://localhost:3009/get_abonents')
            .then((response) => response.json())
            .then(
                (data) => data[0]
            ).then((data) => {
            // console.log(data)
            setAbonents(data)
            setColNames(Object.keys(data[0]))
        })
            .catch((error) => console.log(error))
    }, [])

    return (
        <div>
            <Header next={[["/append", "Append database"], ["/append_device", "Append devices"]]}/>

            {abonents === null ?
                <div className="text-center">
                    <img src={gifLink} alt="gif" class="center"/>
                </div>
                : <DBTable title="My table" columns={colNames} rows={abonents}/>
            }
        </div>
    )
}





export default App;
