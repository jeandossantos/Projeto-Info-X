import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './card.css';

export default function (props) {
    return (
        <div className="card">
            <FontAwesomeIcon icon={props.icon} />
            <p>{props.title}</p>
        </div>
    )
}