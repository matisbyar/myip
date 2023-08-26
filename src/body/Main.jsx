import './../assets/css/main.css';
import mapIcon from './../assets/images/map.svg';
import clockEmoji from './../assets/images/clock.svg'

export default function Main({ infos }) {
    return (
        <>
            <main>
                <Block name={"Public IP address"} info={infos.query} />

                <div className="grid two-by-one">
                    <Map infos={infos} />
                    <div className="grid two-by-two">
                        <Block name={"Latitude"} info={infos.lat} />
                        <Block name={"Longitude"} info={infos.lon} />
                        <Block name={"City"} info={infos.city + ", " + infos.zip + ", " + infos.regionName} />
                        <Block name={"Country"} info={infos.country} />
                    </div>
                </div>

                <Clock infos={infos} />

                <div className="grid two-by-one">
                    <Block name={"Internet Service Provider"} info={infos.isp} />
                    <Block name={"Time Zone"} info={infos.timezone} />
                </div>
            </main>
        </>
    )
}

function Map({ infos }) {
    return (
        <>
            <div className="ip-map-container">
                <div className="ip-map-title">
                    <img src={mapIcon} alt="Map" className="small-icon"/>
                    <h2>Location</h2>
                </div>
                <div className="ip-map">
                    <iframe
                        title="Map"
                        src={`https://maps.google.com/maps?q=${infos.lat},${infos.lon}&z=15&output=embed`}
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                    />
                </div>
            </div>
        </>
    )
}

function Block({ name, info }) {

    return (
        <>
            <div className="container">
                <p className="title">{name}</p>
                <h1 className="info">{ info }</h1>
            </div>
        </>
    )
}

function Clock({infos}) {

    /**
     * Returns the time from a timezone
     * @param timezone — example format: Europe/Paris
     * @returns {string}
     */
    const getTime = (timezone) => {
        try {
            const date = new Date();
            const options = {
                timeZone: timezone,
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            };

            return new Intl.DateTimeFormat('en-US', options).format(date);
        } catch (error) {
            return "Unknown";
        }
    }

    return (
        <>
            <div className="container time">
                <img src={clockEmoji} alt="Time" className="big-icon" />
                <div className="time-text-container">
                    <p className="time-indicator">At your location, it is currently </p>
                    <h1 className="time-text">{getTime(infos.timezone)}</h1>
                </div>
            </div>
        </>
    )
}