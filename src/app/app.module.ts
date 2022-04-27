import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputjsonComponent } from './inputjson/inputjson.component';
import { EditComponent } from './edit/edit.component';
import { ContentViewer, EmbeddedComponents, embeddedComponents } from './dynamic-content-viewer';
import { CodeEditorModule } from '@ngstack/code-editor';
import { ClipboardModule } from 'ngx-clipboard';
@NgModule({
  declarations: [
    AppComponent,
    InputjsonComponent,
    EditComponent,
    ContentViewer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ClipboardModule,
    CodeEditorModule.forRoot()
  ],
  entryComponents: [embeddedComponents],
  providers: [EmbeddedComponents],
  bootstrap: [AppComponent]
})
export class AppModule { }
