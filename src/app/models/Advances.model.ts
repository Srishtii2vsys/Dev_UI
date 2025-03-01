import { Enum_Category } from "../enums/Enum_Category";
import { Enum_Department } from "../enums/Enum_Department";
import { Enum_Status } from "../enums/Enum_Status";

export class Advances {
    id: string = "";
    title: string = "";
    date: string = "";
    lastUpdate: string = "";
    category?: Enum_Category;
    department?: Enum_Department;
    status?: Enum_Status;
    advanceAmount: number = 0;
    personId: string = "";
  }
  