import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-metadata-dialog-component',
  templateUrl: './metadata-dialog.component.html',
  styleUrls: ["./metadata-dialog.component.css"]
})

export class MetadataDialogComponent {

  arrListKey = [];
  arrListVal = [];
  inputTxtKey = '';
  inputTxtVal = '';

  addToListKey() {
    if (this.inputTxtKey != '') {
      this.arrListKey.push(this.inputTxtKey);
    }
  }
  removeKeyItem(index: number) {
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
