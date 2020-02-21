import React from 'react';
import {
    Button,
    Media,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    Row,
    Col,
    Label,
    FormGroup,
    
} from 'reactstrap';
import Select from 'react-select';
import GROUPS from '../../api/groups';
import { baseUrl } from "../../api/baseUrl";


function UserListItem({users,toggleModal}) {


    if (users === null) {
        return <h2>Loading users...</h2>;
      }


    const user_list = users.map(user => {

        return (
            <Media key={
                    user.id
                }
                className="media pt-3">
                <Media left>
                    <Media object src='https://picsum.photos/75/75?random=1'
                        alt={
                            user.first_name
                        }/>
                </Media>
                <Media body className="ml-2">
                    <Media heading>
                        {
                        user.first_name
                    }</Media>
                    <span className="d-block">
                        {
                        user.city
                    }
                        | {
                        user.gender
                    }

                        {
                        (!user.groups || !user.groups.length) ? <Button color="primary"
                            onClick={() => toggleModal(user)}>Add to Group</Button> :
                             <Button color="primary" onClick={() => toggleModal(user)}>Add to other</Button> 
                    } </span>
                </Media>

            </Media>
        );

    });

    return (
        <div> {user_list} </div>
    );


}

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            selectedOption: null,
            users:null
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.calculateSelectOptions = this.calculateSelectOptions.bind(this);
    }
    toggleModal(user) {

        let myoptions = [];
        if(user.groups){
            myoptions =  GROUPS.filter(function(group){
                return user.groups.filter(function(user_group){
                   return user_group.id == group.id;
                }).length == false
             }).map(function(group){
                return  { label: group.name, value: group.id }  
             });
        }else{

            myoptions = GROUPS.map(function(group){
                return  { label: group.name, value: group.id }  
             });

        }        
      
        this.setState({
            isModalOpen: !this.state.isModalOpen,
            options : myoptions
        });
    }

    handleSubmit(values) { 
        console.log("Current State is: " + JSON.stringify(values));

    }   

    fetchUsers = () => {
        return fetch(baseUrl + "users")
          .then(
            response => {
              if (response.ok) {
                return response;
              } else {
                var error = new Error(
                  "Error " + response.status + ": " + response.statusText
                );
                error.response = response;
                throw error;
              }
            },
            error => {
              var errmess = new Error(error.message);
              throw errmess;
            }
          )
          .then(response => response.json())
          .catch(error =>    console.log("Current State is: " + error));
      };

    handleChange = selectedOption => {
        this.setState(
          { selectedOption },
          () => console.log(`Option selected:`, this.state.selectedOption)
        );
      };
    
    componentDidMount() {
        this.fetchUsers().then(response => this.setState({ users: response}));       
     }

    render() {
        const { selectedOption ,users} = this.state;

        return (
            <div>
                <Media list>
                    <UserListItem 
                    toggleModal={this.toggleModal}
                    users={users}
                    />
                </Media>

                <div>
                    <Modal isOpen={
                            this.state.isModalOpen
                        }
                        toggle={
                            this.toggleModal
                    }>
                        <ModalHeader toggle={
                            this.toggleModal
                        }>Submit Comment</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={
                                values => this.handleSubmit(values)
                            }>
                                <Row className="form-group">
                                    <Label htmlFor="rating"
                                        md={2}>Rating</Label>
                                    <Col md={10}>
                                        <FormGroup>
                                            <Label for="exampleSelectMulti">Select Group</Label>
                                            <Select 
                                                isMulti 
                                                value={selectedOption}
                                                onChange={this.handleChange}
                                                options={this.state.options}
                                            />
                                          </FormGroup>
                                    </Col>
                                </Row>


                                <Row className="form-group">
                                    <Col md={
                                        {size: 12}
                                    }>
                                        <Button color="primary" value="submit">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </ModalBody>
                    </Modal>
                </div>

            </div>

        );
    }

}

export default UserList;
