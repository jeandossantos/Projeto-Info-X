import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default props =>
    <button type="button" className={`btn btn-${props.btnStyle}`} onClick={props.onClick}>
        <FontAwesomeIcon icon={props.icon} /></button>