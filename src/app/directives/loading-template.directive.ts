import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appLoadingTemplate]'
})
export class LoadingTemplateDirective {

  constructor(private host: TemplateRef<any>) { }



}
