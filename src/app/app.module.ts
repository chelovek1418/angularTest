import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { AsideComponent } from './components/aside/aside.component';
import { RouteOneComponent } from './components/route-one/route-one.component';
import { RouteTwoComponent } from './components/route-two/route-two.component';
import { RouteThreeComponent } from './components/route-three/route-three.component';
import { Routes, RouterModule } from '@angular/router';
import { ModalBaseComponent } from './components/modal-base/modal-base.component';

const appRoutes: Routes =[
  { path: '', component: RouteOneComponent},
  { path: 'two', component: RouteTwoComponent},
  { path: 'three', component: RouteThreeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AsideComponent,
    RouteOneComponent,
    RouteTwoComponent,
    RouteThreeComponent,
    ModalBaseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
