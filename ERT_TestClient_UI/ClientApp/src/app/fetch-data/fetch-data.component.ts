import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-fetch-data-component',
  templateUrl: './fetch-data.component.html',
  styleUrls: ["./fetchDataStyles.css"]
})

export class FetchDataComponent {

  arrListKey = [];
  arrListVal = [];
  inputTxtKey = '';
  inputTxtVal = '';

  addToListKey(){
    if (this.inputTxtKey != '') {
      this.arrListKey.push(this.inputTxtKey);
    }
  }
  removeKeyItem(index : number){
    this.arrListKey.splice(index, 1);
  }
  addToListVal() {
    if (this.inputTxtVal != '') {
      this.arrListVal.push(this.inputTxtVal);
    }
  }
  removeValItem(index: number) {
    this.arrListVal.splice(index, 1);
  }
}
