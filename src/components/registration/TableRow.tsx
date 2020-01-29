import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component<any,any> {

  constructor(props:any) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/business/delete/'+this.props.obj._id)
            .then(response => console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj._name}
          </td>
          <td>
            {this.props.obj._code}
          </td>
          <td>
            {this.props.obj._id}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;