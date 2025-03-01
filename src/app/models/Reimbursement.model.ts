
import { Enum_Category } from "../enums/Enum_Category";
import { Enum_Department } from "../enums/Enum_Department";
import { Enum_Status } from "../enums/Enum_Status";
import { Person } from "./Person.model";

export class Reimbursement {
    title : string = "";
    date : string = "";
    lastUpdate : string = "";    
    category?  : Enum_Category; 
    department? : Enum_Department;   
    status : Enum_Status = Enum_Status.Screening;
    reimbursementAmount : number = 0;
    personId : string = "";

}