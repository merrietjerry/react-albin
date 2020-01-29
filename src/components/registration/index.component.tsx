import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component<any,any> {
    constructor(props:any) {
        super(props);
        this.state = {business: []};
      }
      componentDidMount(){
        axios.get('http://localhost:4000/addNewContact')
          .then(response => {
            this.setState({ business: response.data });
          })
          .catch(function (error) {
            console.log(error);
          })
      }
      tabRow(){
        return this.state.business.map(function(object:any, i:any){
            return <TableRow obj={object} key={i} />;
        });
      }
  
      render() {
        return (
          <div>
            <h3>Business List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>Person</th>
                  <th>Business</th>
                  <th>GST Number</th>
                  <th colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody>
                { this.tabRow() }
              </tbody>
            </table>
          </div>
        );
      }
}