import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { interval, Observable, Subject, Subscription } from 'rxjs';
import { catchError, finalize, switchMap, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  loading: boolean = false;

  constructor(){
    
  }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    
  }


}
