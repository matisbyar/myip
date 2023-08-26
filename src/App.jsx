import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Main from "./body/Main.jsx";
import About from "./body/About.jsx";
import {useEffect, useState} from "react";

export default function App() {

    const [info, setInfo] = useState([{
        "query": "...",
        "status": "awaiting",
        "country": "...",
        "countryCode": "...",
        "region": "...",
        "regionName": "...",
        "city": "...",
        "zip": "...",
        "lat": 0,
        "lon": 0,
        "timezone": "...",
        "isp": "...",
        "org": "...",
        "as": "..."
    }]);

    const fetchIP = () => {
        fetch("http://ip-api.com/json/")
            .then(response => response.json())
            .then(response => {
                if (response.status === 'fail') throw new Error("Too many requests");

                setInfo(response);
            })
            .catch((error) => {
                setInfo(fallback);
                console.error("Error:", error);
            });

        const fallback = {
            "query": "Unknown",
            "status": "fail",
            "country": "Unknown",
            "countryCode": "Unknown",
            "region": "Unknown",
            "regionName": "Unknown",
            "city": "Unknown",
            "zip": "Unknown",
            "lat": 0,
            "lon": 0,
            "timezone": "Unknown",
            "isp": "Unknown",
            "org": "Unknown",
            "as": "Unknown"
        };
    }

    useEffect(() => {
            fetchIP();
    }, []);

    const [body, setBody] = useState(<Main infos={info}/>);

    useEffect(() => {
        setBody(<Main infos={info}/>);
    }, [info]);

    const contactPage = () => {
        setBody(<About />);
    }

    const bodyPage = () => {
        setBody(<Main infos={info} />);
    }

    return (
        <>
            <Header reload={fetchIP} main={() => bodyPage()} contact={() => contactPage()}/>
            {body}
            <Footer about={() => contactPage()} />
        </>
    )
}