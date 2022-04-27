import { Component, OnDestroy } from '@angular/core'

@Component({
  selector: 'my-component',
  template: `
  
  I am an existing component with name: {{name}} <br />
  projected content: <ng-content></ng-content>
  `,
})
export class EmbeddableComponent implements OnDestroy {
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
 public name: string ='';
  ngOnInit(){
    console.log(`EmbeddableComponent.OnInit name=`, this.name)
  }
}
