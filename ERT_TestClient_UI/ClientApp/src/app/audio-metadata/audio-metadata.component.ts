import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-audio-metadata-component',
  templateUrl: './audio-metadata.component.html',
  styleUrls: ["./audio-metadata.component.css"]
})

export class AudioMetadataComponent {

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
