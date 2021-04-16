import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-metadata-dialog-component',
  templateUrl: './metadata-dialog.component.html',
  styleUrls: ["./metadata-dialog.component.css"]
})

export class MetadataDialogComponent {

  arrList = [];
  inputTxtKey = '';
  inputTxtVal = '';

  addToList() {
    if (this.inputTxtKey != '' && this.inputTxtVal != '') {
      this.arrList.push(this.inputTxtKey + ' = ' + this.inputTxtVal);
    }
  }

  removeItem(index: number) {
    this.arrList.splice(index, 1);
  }
}
