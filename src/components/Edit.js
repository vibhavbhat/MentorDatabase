import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

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

  onChange = (e) => {
    const state = this.state.mentor
    state[e.target.name] = e.target.value;
    this.setState({mentor:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { isbn, name, company, position } = this.state.mentor;

    axios.put('/api/mentor/'+this.props.match.params.id, { isbn, name, company, position })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT MENTOR
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.mentor._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Mentor List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="isbn">ISBN:</label>
                <input type="text" class="form-control" name="isbn" value={this.state.mentor.isbn} onChange={this.onChange} placeholder="ISBN" />
              </div>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={this.state.mentor.name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="company">Company:</label>
                <input type="text" class="form-control" name="company" value={this.state.mentor.company} onChange={this.onChange} placeholder="Company" />
              </div>
              <div class="form-group">
                <label for="position">Position:</label>
                <input type="text" class="form-control" name="position" value={this.state.mentor.position} onChange={this.onChange} placeholder="Position" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;