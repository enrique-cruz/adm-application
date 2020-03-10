import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { AdmSharedModule } from 'app/shared/shared.module';
import { AdmCoreModule } from 'app/core/core.module';
import { AdmAppRoutingModule } from './app-routing.module';
import { AdmHomeModule } from './home/home.module';
import { AdmEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    AdmSharedModule,
    AdmCoreModule,
    AdmHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    AdmEntityModule,
    AdmAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class AdmAppModule {}
