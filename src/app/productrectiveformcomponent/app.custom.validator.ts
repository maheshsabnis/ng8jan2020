import { AbstractControl } from '@angular/forms';

// the custom validator must contains static methods
// method can accept AbstractControl/premoptive tyeps as input parameter
// if the data is valid then method returns 'null'
// for invlid value method will return JSON object as
// {invalid:true} / {valid:false}


export class EvenValidator {
    static checkEven(ctrl:AbstractControl): any {
       let value = ctrl.value;
       if(value % 2 === 0) {
          return null;
       } else {
         return {valid:false}
       }
    }
}