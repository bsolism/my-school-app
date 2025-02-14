import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { SideNavComponent } from './layouts/side-nav/side-nav.component';
import { AppInfoService } from './shared/services/app-info.service';
import { AuthService } from './shared/services/auth.service';
import { ScreenService } from './shared/services/screen.service';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SideNavComponent, FooterComponent, HttpClientModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @HostBinding('class') get getClass() {
    const sizeClassName = Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
    return `${sizeClassName} app` ;
  }
  // title = 'my-school-app';

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService){}
}
