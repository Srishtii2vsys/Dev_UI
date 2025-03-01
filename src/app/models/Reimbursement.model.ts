
import { Enum_Category } from "../enums/Enum_Category";
import { Enum_Department } from "../enums/Enum_Department";

export class Reimbursement {
    title : string = "";
    category?  : Enum_Category; 
    department? : Enum_Department;   

}