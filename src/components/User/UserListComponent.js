import React from "react";
import { Button, Media } from "reactstrap";
import USERS from "../../api/users";

const UserList = (props = null) => {
  const userList = USERS.map(user => (
    <Media key={user.id} className="media pt-3">
      <Media left>
        <Media
          object
          src={"http://localhost:3000/assets/images/profile-placeholder.jpg"}
          width="75"
          height="75"
          alt={user.first_name}
        />
      </Media>
      <Media body className="ml-2">
        <Media heading>{user.first_name}</Media>
        <span class="d-block">
          {user.city} | {user.gender} |{" "}
          {user.groups && user.groups.length ? (
            <span>
              Group joined<b>({user.groups.length})</b>
            </span>
          ) : (
            <a href="#">Add to Group</a>
          )}
          <span class="text-right">
            <Button
              color="primary"
              className="btn-sm"
              style={{ float: "right", paddingRight: "5px" }}
            >
              View
            </Button>
          </span>
        </span>
      </Media>
    </Media>
  ));

  return <Media list>{userList}</Media>;
};

export default UserList;
