import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export function Icon(props) {
    return (
        <React.Fragment>
            <FontAwesomeIcon icon={props.icon} />
        </React.Fragment>
    )
}