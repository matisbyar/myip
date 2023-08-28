import code from "../assets/images/code.svg";
import si from "../assets/images/information_systems.svg";
import design from "../assets/images/design.svg";
import student from "../assets/images/student.svg";
import matis from "../assets/images/matis_byar.png";

export default function ProfileIcon() {
    return (
        <>
            <div className="profile-pic-container">
                <img src={code} alt="Software developer" className="profile-astra" id="astra-one" />
                <img src={si} alt="Information systems" className="profile-astra" id="astra-two" />
                <img src={design} alt="Designer" className="profile-astra" id="astra-three" />
                <img src={student} alt="Student" className="profile-astra" id="astra-four" />

                <span className="astra-line-large"></span>
                <span className="astra-line-small"></span>

                <img src={matis} alt="Matis Byar" className="profile-pic" />
            </div>
        </>
    );
}