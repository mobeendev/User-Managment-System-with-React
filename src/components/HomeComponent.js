import React from 'react';
import {
    Card,
    Button,
    CardTitle,
    CardText,
    Row,
    Col,
    Jumbotron,
    Container
} from 'reactstrap';

function Home(props) {
    return (
        <React.Fragment>
                   <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

            <Container>
                <Row className="p-1   bg-light my-1">
                    <Col>
                        <Card body>
                            <CardTitle>
                                <h2 class="featurette-heading">Total Groups.
                                    <span class="text-muted">12.</span>
                                </h2>
                            </CardTitle>

                            <CardText>With supporting text below as a natural lead-ith supporting text below as a natural lead-ith supporting text below as a natural lead-ith supporting text below as a natural lead-in to additional content.</CardText>
                            <Button color="primary">View Groups</Button>
                        </Card>
                    </Col>
                    <Col>
                        <Card body>
                            <CardTitle>
                                <h2 class="featurette-heading">Total Users
                                    <span class="text-muted">
                                        14,555.00</span>
                                </h2>
                            </CardTitle>
                            <CardText>With supporting text below as a natural lead-ith supporting text below as a natural lead-ith supporting text below as a natural lead-ith supporting text below as a natural lead-in to additional content.</CardText>
                            <Button color="secondary">View Users</Button>
                        </Card>
                    </Col>
                </Row>

                <Row xs="2" className="p-1   bg-light my-1 rounded">
                    <Col>
                        <div class="row featurette">
                            <div class="col-md-6">
                                <h2 class="featurette-heading">Best Group
                                </h2>
                                <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                            </div>
                            <div class="col-md-6">
                                <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="200" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 200x200">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#eee"></rect>
                                    <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
                                </svg>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div class="row featurette">
                            <div class="col-md-6">
                                <h2 class="featurette-heading">Best User
                                </h2>
                                <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                            </div>
                            <div class="col-md-6">
                                <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="400" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 200x200">
                                    <title>Placeholder</title>
                                    <rect width="200%" height="200%" fill="#eee"></rect>
                                    <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
                                </svg>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="p-1   bg-light my-1 rounded">
                    <Col>
                        <div class="row featurette">

                            <div class="col-md-3">
                                <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 200x200">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#eee"></rect>
                                    <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
                                </svg>
                            </div>
                            <div class="col-md-8">
                                <h2 class="featurette-heading">First featurette heading.
                                    <span class="text-muted">It’ll blow your mind.</span>
                                </h2>
                                <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                                <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                                <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </React.Fragment>

    );
}

export default Home;
