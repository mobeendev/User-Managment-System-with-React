import React from 'react';
import { Button,
    Media} from 'reactstrap';
import USERS from '../../api/users';


const UserList = (props=null) => {

 const userList = USERS.map((user) =>
<Media key={user.id} className="media pt-3">
            <Media left>
            <Media object src='https://picsum.photos/75/75?random=1' alt={user.first_name} />
            </Media>
            <Media body className="ml-2">
                 <Media heading>{user.first_name}</Media>
                 <span class="d-block"> 
            {user.city} | {user.gender}
            <span class="text-right">

            <Button color="primary" className="btn-sm">Add to Group</Button>
                            
                </span>
            </span>
            </Media>

</Media>



  );

  return (
   
      <Media list>{userList}</Media>
  );

}

export default UserList;