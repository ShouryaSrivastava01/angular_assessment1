import { Directive, Input, OnInit, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlightTask]'
})
export class HighlightTaskDirective implements OnInit {
  @Input('appHighlightTask') status : string
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.highlightTask()
  }

  private highlightTask(){
    switch(this.status.toLowerCase()){
      case 'to do':
        this.renderer.setStyle(this.el.nativeElement, 'background-color','green')
        break;
      case 'in progress':
        this.renderer.setStyle(this.el.nativeElement, 'background-color','blue')
        break;
      case 'done':
        this.renderer.setStyle(this.el.nativeElement, 'background-color','yellow')
        break;
    }
  }

  

}
