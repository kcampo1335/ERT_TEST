import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-fetch-data-component',
  templateUrl: './fetch-data.component.html'
 // styleUrls: ["./fetch-data.fetchDataStyles.css"]
})

export class FetchDataComponent {

  arrList = [];
  inputTxtKeyVal = '';

  addToList(){
    if (this.inputTxtKeyVal != '' && this.inputTxtKeyVal.includes(',')) {
      this.arrList.push(this.inputTxtKeyVal);
    }
  }

  removeItem(index : number){
    this.arrList.splice(index, 1);
  }
}
