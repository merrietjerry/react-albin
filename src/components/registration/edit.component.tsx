import React, { Component } from 'react';
import axios from 'axios';
import "reflect-metadata";
import { injectable, inject,named,interfaces } from "inversify";
import TYPES from "../../config/containerType";
import containerconfig from "../../config/containerconfig"

import iregistrationuiservice from "../../uiservice/interface/iregistrationuiservice";


@injectable()
export default class Edit extends Component<any,any> {
  constructor(props:any) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: '',
      business_name: '',
      business_gst_number:''
    }
  }

  componentDidMount() {
      debugger;
   let iregn = containerconfig.get<iregistrationuiservice>(TYPES.iregistrationuiservice);
    iregn.getbyId(this.props.match.params.id)
         .then((response:any)=>{
        debugger;
        this.setState({person_name: response.Name,
            business_name: response.Code,
            business_gst_number:response.Id });
        }
    )
  }

  onChangePersonName(e:any) {
    this.setState({
      person_name: e.target.value
    });
  }
  onChangeBusinessName(e:any) {
    this.setState({
      business_name: e.target.value
    })  
  }
  onChangeGstNumber(e:any) {
    this.setState({
      business_gst_number: e.target.value
    })
  }

  onSubmit(e:any) {
    e.preventDefault();
    const obj = {
      person_name: this.state.person_name,
      business_name: this.state.business_name,
      business_gst_number: this.state.business_gst_number
    };
    axios.post('http://localhost:4000/business/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Update Business</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Person Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.person_name}
                      onChange={this.onChangePersonName}
                      />
                </div>
                <div className="form-group">
                    <label>Business Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.business_name}
                      onChange={this.onChangeBusinessName}
                      />
                </div>
                <div className="form-group">
                    <label>GST Number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.business_gst_number}
                      onChange={this.onChangeGstNumber}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update Business" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}