import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

type BtnState = 'loading' | 'valid' | 'invalid' | 'success' | 'failure';
 
@Component({
  selector: 'app-state-btn',
  templateUrl: './state-btn.component.html',
  styleUrls: ['./state-btn.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ transform: 'translateY(-20px)' }),
        animate('500ms', style({transform: 'translateY(0px)' })),
      ]),
      transition(':leave', [
        style({ position: 'absolute', left: '2rem' }),
        animate('500ms', style({ transform: 'translateY(20px)' }))
      ])
    ]),
  ]
})
export class StateBtnComponent implements OnInit, AfterViewInit {
  
  @Input() inValid: boolean;
  @Input() loading: boolean;
  @Input() success: boolean;
  @Input() failure: boolean;
  
  @ViewChild('contentOutlet', {read: ViewContainerRef}) vc: ViewContainerRef;
  @ViewChild('templ', {read: TemplateRef}) tpl: TemplateRef<any>;
  @ViewChild('stdLoadingTemp', {read: TemplateRef}) stdLoadingTemp: TemplateRef<any>;
  
  constructor() { }
  
  ngAfterViewInit(): void {
    
  }

  currState(): BtnState{
    if(this.loading) return 'loading';
    if(this.success) return 'success';
    if(this.failure) return 'failure';
    return 'valid';
  }

  ngOnInit(): void {
    
  }

}
