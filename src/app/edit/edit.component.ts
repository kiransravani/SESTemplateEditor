import {
  AfterContentInit,
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit, AfterViewInit, OnChanges {
  @Input()
  public contentforEdit: any = { content: '', type: 'html' };
  //vs, vs-dark or hc-black.
  public theme = 'vs-dark';
  public edited: any;

  @Output() changedContent: EventEmitter<any> = new EventEmitter();
  options = {
    contextmenu: true,
    minimap: {
      enabled: true,
    },
  };
  public model: any;
  constructor() {
    this.model = {
      language: 'html',
      uri: 'main.html',
      value: this.contentforEdit.content,
    };
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.model = {
      language: 'html',
      uri: 'main.html',
      value: this.contentforEdit.content,
    };
  }

  ngAfterViewInit(): void {
    this.model = {
      language: 'html',
      uri: 'main.html',
      value: this.contentforEdit.content,
    };
  }

  ngOnInit(): void {
    this.contentforEdit = { content: '', type: 'html' };
    this.model = {
      language: 'html',
      uri: 'main.html',
      value: this.contentforEdit.content,
    };
  }

  onCodeChanged(value: any) {
    this.edited = {
      content: value,
      type: localStorage.getItem('type'),
    };
  }
  preview() {
    if (this.edited) this.changedContent.emit(this.edited);
  }
}
