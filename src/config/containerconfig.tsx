'use strict';
import "reflect-metadata";
import { Container} from "inversify";
import TYPES from "../config/containerType";
import iregistrationuiservice from "../uiservice/interface/iregistrationuiservice";
import registrationuiservice from "../uiservice/implementation/registrationuiservice";

const container = new Container();

//controller injuction
container.bind<iregistrationuiservice>(TYPES.iregistrationuiservice).to(registrationuiservice);
//business injuction  
//container.bind<isampleManager>(TYPES.isampleManager).to(sampleManager);

// export default class containerconfig
// {
//   public containerRegistration(myContainer: Container) : void
//   {
//     //controller injuction
//     myContainer.bind<isample>(TYPES.isample).to(sample);
//     //business injuction  
//     myContainer.bind<isampleManager>(TYPES.isampleManager).to(sampleManager);
//   }

  // public containerResolver(myContainer: Container): any
  // {
  //   var resolver = myContainer.get<isampleManager>(TYPES.isampleManager);
  //  return resolver;
  // }

//}
export default container;