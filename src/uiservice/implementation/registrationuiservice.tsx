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
        return axios.get('http://localhost:4000/getId/id'+id)
        .then(response => {
            debugger;
            rmodel.Name = response.data._name;
            rmodel.Code=response.data._code;
            rmodel.Id = response.data._id;
            return rmodel;
         })
        .catch(function (error) {
            console.log(error);
        })

    }
    public  getData():any
    {
        debugger;
        return axios.get('http://localhost:4000/addNewContact')
        .then(response => {
            debugger;
          let regmodels = Array<regmodel>();
          response.data.map((v:any,i:number)=>{
            let rmodel = new regmodel(); 
            rmodel.Name = v._name;
            rmodel.Code=v._code;
            rmodel.Id = v._id;
            regmodels.push(rmodel);
          })
            return regmodels;
         })
        .catch(function (error) {
            console.log(error);
        })

    }
}
