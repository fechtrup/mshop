import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { HeadlineComponent } from './headline/headline.component';
import { IconComponent } from './icon/icon.component';
import { HeadlineWithIconComponent } from './headline-with-icon/headline-with-icon.component';
import { DividerComponent } from './divider/divider.component';
import { OfferPageComponent } from './offer-page/offer-page.component';
import { SectionComponent } from './section/section.component';
import { InputComponent } from './input/input.component';
import { BtnProgressComponent } from './btn-progress/btn-progress.component';
import { PageComponent } from './page/page.component';
import { OfferSiteComponent } from './offer-site/offer-site.component';
import { LabelComponent } from './label/label.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    MenuComponent,
    HeaderComponent,
    HeadlineComponent,
    IconComponent,
    HeadlineWithIconComponent,
    DividerComponent,
    OfferPageComponent,
    SectionComponent,
    InputComponent,
    BtnProgressComponent,
    PageComponent,
    OfferSiteComponent,
    LabelComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
