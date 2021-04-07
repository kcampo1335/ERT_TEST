import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-audio-component',
  templateUrl: './audio.component.html',
  styleUrls: ["./audio.component.css"]
})

export class AudioComponent {

  arrListAudio = [];
  arrListVal = [];
  inputTxtAudio = '';
  inputTxtVal = '';

  addToListAudio() {
    if (this.inputTxtAudio != '') {
      this.arrListAudio.push(this.inputTxtAudio);
    }
  }
  removeAudioItem(index: number) {
    this.arrListAudio.splice(index, 1);
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
