import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss']
})
export class CookieBannerComponent implements OnInit {

  public bannerVisible : boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit(): void {
    this.bannerVisible = this.getCookie("cookiebanner") != "true";
  }

  agree() : void {
    this.setCookie("cookiebanner", "true");
    this.bannerVisible = false;
  }

  setCookie(name,value,days?) {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
    }
    this.getWindow().document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }

  getCookie(name) {
    let nameEQ = name + "=";

    let ca = this.getWindow().document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
      let c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }

  getWindow() {
    if (isPlatformBrowser(this.platformId)) {
      return window;
    } else {
      return {document:{cookie:''}};
    }
  }

}
