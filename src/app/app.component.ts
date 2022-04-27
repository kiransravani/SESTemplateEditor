import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InputJoson } from './inputjson';
import { ClipboardService } from 'ngx-clipboard'
import { ContentViewer } from './dynamic-content-viewer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterContentInit, OnChanges, OnInit {
  private fileContent: InputJoson;
  public output: InputJoson;
  public finalJson:string = ''
  templateName:string = '';
  subjectPart:string = '';
  eidtType:string = 'html';
  textPart:string = '';
  resetfile:boolean = false;
  public prev: any = {'content': '', 'type' : 'html'};
  @ViewChild(ContentViewer)
  dynamic!: ContentViewer;

  constructor( private clipboardApi: ClipboardService) {
    this.fileContent = {
      Template: {
        TemplateName: '',
        SubjectPart: '',
        TextPart: '',
        HtmlPart: '',
      },
    };
    this.output = {
      Template: {
        TemplateName: '',
        SubjectPart: '',
        TextPart: '',
        HtmlPart: '',
      },
    };
    localStorage.setItem('type', '' );
  }
  ngOnInit(): void {
    
  }
  ngAfterContentInit(): void {
    // if (this.fileContent) {
    //   this.prev = this.fileContent.Template.HtmlPart;
    //   this.output = this.fileContent;
    // }
  }
  ngOnChanges(changes: SimpleChanges): void {
    localStorage.setItem('type', this.eidtType);
    this.output = this.fileContent;
  }
  ngAfterViewInit(): void {}
  title = 'SES Template Editor';
  
  contentChanged(data:any) {
    this.fileContent = {
      Template: {
        TemplateName: '',
        SubjectPart: '',
        TextPart: '',
        HtmlPart: '',
      },
    };
    this.output = {
      Template: {
        TemplateName: '',
        SubjectPart: '',
        TextPart: '',
        HtmlPart: '',
      },
    };  
    this.eidtType = 'html';
    this.fileContent = JSON.parse(data);
    this.templateName = this.fileContent.Template.TemplateName;
    this.subjectPart = this.fileContent.Template.SubjectPart;
    this.textPart = this.fileContent.Template.TextPart;
    this.output = this.fileContent;
  
  }
  changedContent(data: any) {
  
    if (data) {
      this.prev = data;
      if(data.type == 'html') {
        this.output.Template.HtmlPart = data.content;
        this.fileContent.Template.HtmlPart = data.content;
      }
      if(data.type == 'txt') {
        this.output.Template.TextPart= data.content;
        this.fileContent.Template.TextPart= data.content;
      }
      if(data.type == 'textSub') {
        this.output.Template.SubjectPart= data.content;
        this.fileContent.Template.SubjectPart= data.content;
      }
      this.output.Template.TemplateName = this.fileContent.Template.TemplateName;
      
     this.finalJson = JSON.stringify(this.output)
  
    }
  }

  copyFinalTemplate() {
    this.clipboardApi.copyFromContent(this.finalJson)
  }
  
  loadContent() {
  
    if(this.eidtType == 'html') {
      localStorage.setItem('type', this.eidtType);
      this.prev = {'content': this.fileContent.Template.HtmlPart, 'type:':localStorage.getItem('type')};
    } else if(this.eidtType == 'txt') {
      localStorage.setItem('type', this.eidtType);
      this.prev = {'content': this.fileContent.Template.TextPart, 'type:':localStorage.getItem('type')};
    } else if(this.eidtType == 'textSub') {
      localStorage.setItem('type', this.eidtType);
      this.prev = {'content': this.fileContent.Template.SubjectPart, 'type:':localStorage.getItem('type')};
    }
  }
checkit(event: any) {
    this.eidtType = event.target.value;
    localStorage.setItem('type', this.eidtType);
   
  }
  saveToFile() {

    // Convert the text to BLOB.
    const textToBLOB = new Blob([this.finalJson], { type: 'application/json' });
    const sFileName = 'ses-templates-'+this.fileContent.Template.TemplateName+'.json';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
  }
  reset() {
    // this.fileContent = {
    //   Template: {
    //     TemplateName: '',
    //     SubjectPart: '',
    //     TextPart: '',
    //     HtmlPart: '',
    //   },
    // };
    // this.output = {
    //   Template: {
    //     TemplateName: '',
    //     SubjectPart: '',
    //     TextPart: '',
    //     HtmlPart: '',
    //   },
    // };
    // localStorage.setItem('type', '' );
    //   this. finalJson = ''
    // this.templateName = '';
    // this.subjectPart = '';
    // this.eidtType = 'html';
    // this.textPart = '';
    // this.resetfile = true;
    // this.prev = {'content': '', 'type' : 'html'};
    // if(this.dynamic) {
    //   this.dynamic.ngOnDestroy()
    // }
    window.location.reload()
   
  }
   
}
