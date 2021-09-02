import { OverlayRef } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';

export interface ModelRef {
    overlayref: OverlayRef;
    dismissed$: Observable<any>;
    outsideClick$: Observable<MouseEvent>;   
}