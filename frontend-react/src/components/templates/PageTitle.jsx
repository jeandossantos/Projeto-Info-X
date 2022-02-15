import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './pageTitle.css';

export default function (props) {
    return (
        <div className="pageTitle">
            <h2 className="title"><FontAwesomeIcon icon={props.icon} /> {props.title}</h2>
            <p className="sub-title"><b>{props.subTitle}</b></p>
        </div>
    )
} 