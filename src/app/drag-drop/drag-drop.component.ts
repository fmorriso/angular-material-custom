import { Component } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-drag-drop',
  imports: [BrowserModule, BrowserAnimationsModule, DragDropModule],
  templateUrl: './drag-drop.component.html',
  styleUrl: './drag-drop.component.scss'
})
export class DragDropComponent {

}
