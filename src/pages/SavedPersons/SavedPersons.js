import React, { Component } from "react";
import API from "../../utils/API";
import { Person } from '../../components/Person'
import Jumbotron from "../../components/Jumbotron";
import { H1, H3 } from '../../components/Headings';
import { Container, Row, Col } from "../../components/Grid";
import { Panel, PanelHeading, PanelBody } from '../../components/Panel'


export default class SavedPersons extends Component {
  state = {
    savedPersons: []// Saved persons go here
  };

  //Saved persons get loaded from here
  componentWillMount() {
    this.loadPersons();
  };

  //This function retrieves the persons
  loadPersons = () => {
    API
      .getPersons()
      .then(results => {
        this.setState({savedPersons: results.data})
      })
  };

  // This function finds persons and deletes them
  deletePerson = id => {
    API
      .deletePerson(id)
      .then(results => {// Persons are re-rendered after the deletion with this
        let savedPersons = this.state.savedPersons.filter(person => person._id !== id)
        this.setState({savedPersons: savedPersons})
        this.loadPersons();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-10" offset='sm-1'>
            <Jumbotron>
              <H1 className="text-center">Our Saved Persons</H1>
              <hr style={{width: '60%'}}/>
            </Jumbotron>
            <Panel>
              <PanelHeading>
                <H3>Saved Persons</H3>
              </PanelHeading>
              <PanelBody>
                { this.state.savedPersons.length > 0 ?
                  (this.state.savedPersons.map((person, i) => (
                    <Person
                      key={i}
                      name={person.className}
                      summary={person.summary}
                      date={person.date}
                      type='Delete'
                      onClick={() => this.deletePerson(person._id)}
                    />
                    )
                  )) : <H1>You have no saved persons.</H1>
                }
              </PanelBody>
            </Panel>
          </Col>
        </Row>
      </Container>
    );
  };
};
