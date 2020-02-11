import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem
} from "reactstrap";
import {Link} from "react-router-dom";

function User() {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Groups</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Groups</h3>
                    <hr/>
                </div>
            </div>
        </div>
    );
}

export default User;
