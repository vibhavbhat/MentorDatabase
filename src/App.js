import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mentors: []
    };
  }

  componentDidMount() {
    axios.get('/api/mentor')
      .then(res => {
        this.setState({ mentors: res.data });
        console.log(this.state.mentors);
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              MENTOR CATALOG
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Mentor</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>ISBN</th>
                  <th>Name</th>
                  <th>Company</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mentors.map(mentor =>
                  <tr>
                    <td><Link to={`/show/${mentor._id}`}>{mentor.isbn}</Link></td>
                    <td>{mentor.name}</td>
                    <td>{mentor.company}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;