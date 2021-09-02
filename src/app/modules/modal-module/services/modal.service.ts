import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private overlay: Overlay) { }

  showModal() {
    let overlayConfig = new OverlayConfig();
    overlayConfig.hasBackdrop = true;
    overlayConfig.positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();
  }

}
  