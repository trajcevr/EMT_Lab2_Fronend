import React from 'react'
import {Link} from "react-router-dom";

const bookterm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.category}</td>
            <td>{props.term.author.name} {props.term.author.surname}</td>
            <td>{props.term.availableCopies}</td>
            <td>
                <a title={"Delete"} className={"btn btn-outline-info"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                <a title={"MarkAsTaken"} className={"btn btn-outline-info"}
                   onClick={() => props.onMarkasTaken(props.term.id)}>
                    Mark as Taken
                </a>
                <Link className={"btn btn-info"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/books/edit/${props.term.id}`}>
                    Edit
                </Link>

            </td>

        </tr>
    );
}
export default bookterm;