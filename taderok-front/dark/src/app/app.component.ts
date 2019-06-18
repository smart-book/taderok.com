import { Component } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd, RouterEvent } from '@angular/router';
import { PlatformLocation } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUrl: string;
  showLoadingIndicatior = true;

  constructor(private _router: Router, location: PlatformLocation) {
    this._router.events.subscribe((routerEvent: Event) => {

      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicatior = true;
        location.onPopState(() => {
          window.location.reload();
        });
        this.currentUrl = routerEvent.url.substring(routerEvent.url.lastIndexOf('/') + 1);
      }

      if (this.currentUrl.trim() === "signin" || this.currentUrl.trim() === "signup" || this.currentUrl.trim() === "forgot-password" || this.currentUrl.trim() === "locked" || this.currentUrl.trim() === "page404" || this.currentUrl.trim() === "page500") {
        document.getElementById("main-component").style["display"] = "none";
      } else {
        document.getElementById('main-component').style.removeProperty("display");
      }
      if (routerEvent instanceof NavigationEnd) {
        this.showLoadingIndicatior = false;
      }
      window.scrollTo(0, 0)
    });
  }
}
