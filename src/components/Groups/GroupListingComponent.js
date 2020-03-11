import React from 'react';
import {baseUrl} from '../../api/baseUrl';
import {
    Card,
    CardText,
    CardBody,
    CardLink,
    CardTitle,
    CardSubtitle
} from 'reactstrap';


function GroupListItem({groups}) {


    if (groups === null) {
        return <h2>Loading groups...</h2>;
    }


    let grid_arr = groups.map(group => {

        return (
            <div className="col-3"
                key={
                    group.id
            }>
                <Card>
                    <CardBody>
                        <CardTitle></CardTitle>
                        <CardSubtitle> {
                            group.name
                        } </CardSubtitle>
                    </CardBody>
                    <img width="100%" object src='https://picsum.photos/20/20?random=1' alt="Card image cap"/>
                    <CardBody>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <CardLink href="#">Card Link</CardLink>
                        <CardLink href="#">Another Link</CardLink>
                    </CardBody>
                </Card>
            </div>

        )
    });

    return (
        <div className="row">
            {grid_arr} </div>
    );


}
class GroupListingComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            groups: null
        };
        this.fetchGroups = this.fetchGroups.bind(this);

    }

    componentDidMount() {
        this.fetchGroups().then((response) => {
            this.setState({groups: response});

            console.log(this.state);

        });

    }

    fetchGroups = () => {
        return fetch(baseUrl + "groups").then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error("Error " + response.status + ": " + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        }).then(response => response.json()).catch(error => console.log("Current State is: " + error));
    };

    render() {
        const {groups} = this.state;
        return ( <GroupListItem groups={groups}/> );
    }


}


export default GroupListingComponent;
