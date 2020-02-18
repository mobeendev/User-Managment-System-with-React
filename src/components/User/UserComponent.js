import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem
} from "reactstrap";
import {Link} from "react-router-dom";
import UserList from "./UserListComponent";

function User() {
    return (
        <div className="container">
            
            <div className="row" className="p-1 bg-light my-1">
                
                <div className="col-12">
                <h2>Users List</h2>
                    <UserList />
                </div>
            </div>


        </div>
    );
}

export default User;
