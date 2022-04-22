import React from "react";

const categories = (props) => {
    return (
        <div className={"container mm-2 mt-4"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-info"}>
                        <thead>
                        <tr>
                            <th style={{textAlign: 'center'}} scope={"col"}>CATEGORY NAME</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.categories.map((term) => {
                            return (
                                <tr>
                                    <td style={{textAlign: 'center'}}>{term}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

}
export default categories;