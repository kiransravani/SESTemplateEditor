import { Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';


@Component({
  selector: 'app-inputjson',
  template: `
  <input #file
        class="form-control form-control-sm"
        (change)="fileChanged($event.target.files)"
        type="file"
      />
  
  `,
})
export class InputjsonComponent implements OnInit, OnChanges, OnDestroy {
  @Input('resetfile') public resetfile:boolean = false;
  @Output() public contentChanged: EventEmitter<any> = new EventEmitter();
  @ViewChild('file')
  files!: ElementRef;
  constructor() {}
  ngOnDestroy(): void {
    if(this.resetfile) {
      this.files.nativeElement.value = "";
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    let change = changes['resetfile']
    if(change&&change.currentValue == true) {
      this.files.nativeElement.value = "";
    }
  }
  ngOnInit(): void {}

  fileChanged(fileList: FileList): void {
    let fileReader = new FileReader();
    let self: any = this;
      fileReader.onload = (e) => {
      self.fileContent = fileReader.result;
      this.contentChanged.emit(fileReader.result);
    };
    fileReader.readAsText(fileList[0]);
   
    
    
  }
}

