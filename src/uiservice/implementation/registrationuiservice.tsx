import "reflect-metadata";
import { injectable} from "inversify";
import axios from 'axios';
import iregistrationuiservice from "../interface/iregistrationuiservice";

import regmodel from "../../model/registrationmodel"

@injectable()
export default class registrationuiservice implements iregistrationuiservice
{
  public  getbyId(id:number):any
    {
        debugger;
        let rmodel = new regmodel();
        axios.get('http://localhost:4000/getId/id'+id)
        .then(response => {
            debugger;
            return response.data;
        //     // rmodel.Name = response.data._name;
        //     // rmodel.Code=response.data._code;
        //     // rmodel.Id = response.data._id;
        //     // this.setState({ 
        //     //   person_name: response.data._name, 
        //     //   business_name: response.data._code,
        //     //   business_gst_number: response.data._id });
         })
        .catch(function (error) {
            console.log(error);
        })

    }
}
