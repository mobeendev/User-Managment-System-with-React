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
    Input
} from 'reactstrap';
import USERS from '../../api/users';


function UserListItem({toggleModal}) {


    const user_list = USERS.map(user => {

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
                    <span class="d-block">
                        {
                        user.city
                    }
                        | {
                        user.gender
                    }

                        {
                        (!user.groups || !user.groups.length) ? <Button color="primary"
                            onClick={toggleModal}>Add to Group</Button> : user.length
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
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) { // console.log("Current State is: " + JSON.stringify(values));
    }

    render() {
        return (
            <div>
                <Media list>
                    <UserListItem toggleModal={
                        this.toggleModal
                    }/>
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
                                            <Label for="exampleSelectMulti">Select Multiple</Label>
                                            <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Input>
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
