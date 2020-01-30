import React, { Component } from 'react';
import { injectable, inject,named,interfaces } from "inversify";
import TYPES from "../../config/containerType";
import containerconfig from "../../config/containerconfig"
import iregistrationuiservice from "../../uiservice/interface/iregistrationuiservice";

//import axios from 'axios';
import TableRow from './TableRow';
import regmodel from "../../model/registrationmodel"

@injectable()
export default class Index extends Component<any,any> {
    constructor(props:any) {
        super(props);
       
        this.state = {business: Array<regmodel>()};
      }
      componentDidMount(){
        let iregn = containerconfig.get<iregistrationuiservice>(TYPES.iregistrationuiservice);
        iregn.getData()
             .then((response:any)=>{
            debugger;
            this.setState({business:response});
            }
        )
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