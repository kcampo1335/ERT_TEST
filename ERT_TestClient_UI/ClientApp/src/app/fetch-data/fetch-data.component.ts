import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-fetch-data-component',
  templateUrl: './fetch-data.component.html'
  // styleUrls: ["./fetch-data.fetchDataStyles.css"]
})

export class FetchDataComponent {

  arrList = [];
  inputTxtKey = '';
  inputTxtVal = '';

  addToList() {
    if (this.inputTxtKey != '' && this.inputTxtVal != '') {
      this.arrList.push(this.inputTxtKey + ', ' + this.inputTxtVal);
    }
  }

  removeItem(index: number) {
    this.arrList.splice(index, 1);
  }
}
