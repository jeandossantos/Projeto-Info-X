import './pageTitle.css';

export default function (props) {
    return (
        <div className="pageTitle">
            <p className="title"><b>{props.title}</b></p>
        </div>
    )
} 