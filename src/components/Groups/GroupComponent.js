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
import chunkArray from '../../shared/utils';

function Group() {
    let dta = Array(8).fill().map(Math.random);
    // console.log(chunkArray(dta,3));

    // let  grid_arr = chunkArray(dta,3);
    let grid_arr = dta.map(x =>  {
        return (
                  <div className="col-3">
                      <Card>
                          <CardBody>
                              <CardTitle>x</CardTitle>
                              <CardSubtitle>Card subtitle</CardSubtitle>
                          </CardBody>
                          <img width="100%"  object src='https://picsum.photos/30/30?random=1' alt="Card image cap"/>
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
        <div className="container">
          <div className="row">
            {grid_arr}
          </div>
        </div>
    );
}

export default Group;
