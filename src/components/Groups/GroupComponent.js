import React from "react";
import {
    Card,
    CardText,
    CardBody,
    CardLink,
    CardTitle,
    CardSubtitle
} from "reactstrap";
import {Link} from "react-router-dom";
import GroupForm from './GroupForm';
import GroupListingComponent from './GroupListingComponent';

function Group() {
    return (
        <div className="container">
          <div className="row">
          <div className="col-sm-12 col-md-9 ">
             <GroupListingComponent></GroupListingComponent>
          </div>
          <div className="col-sm-12 col-md-3 order-xs-first">
              <h2>Add New Group</h2>
              <GroupForm></GroupForm>
              
          </div>
          </div>
        </div>
    );
}

export default Group;
