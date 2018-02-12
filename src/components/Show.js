import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mentor: {}
    };
  }

  componentDidMount() {
    axios.get('/api/mentor/'+this.props.match.params.id)
      .then(res => {
        this.setState({ mentor: res.data });
        console.log(this.state.mentor);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('/api/mentor/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              {this.state.mentor.name}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Mentor List</Link></h4>
            <dl>
              <dt>ISBN:</dt>
              <dd>{this.state.mentor.isbn}</dd>
              <dt>Author:</dt>
              <dd>{this.state.mentor.author}</dd>
              <dt>Description:</dt>
              <dd>{this.state.mentor.description}</dd>
              <dt>Publish Date:</dt>
            </dl>
            <Link to={`/edit/${this.state.mentor._id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.mentor._id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;