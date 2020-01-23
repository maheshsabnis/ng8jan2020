import {Injectable} from '@angular/core'; 

@Injectable()
export class UtilityService {
    chagneCase(str: string, c: string) : string {
       if(c === "L") return str.toLowerCase();
       if(c === "U") return str.toUpperCase();

       return str;
    }
}