import { 
  Directive, 
  ElementRef, 
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[text-format-mask]' // Attribute selector
})
export class TextFormatMaskDirective {
  private textMaskInputElement: any
  private inputElement: HTMLInputElement

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    
  }

  setupMask (create = false) {
    if (!this.inputElement) {
      this.inputElement = this.elementRef.nativeElement;
    } else if (create) {
    }
  }


}
