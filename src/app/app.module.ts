import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HoverDirective } from './hover.directive';
import { SearchPipe } from './search.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import { SetupPageComponent } from './setup-page/setup-page.component';

const routes = [
  {path: '', component: HomePageComponent},
  {path: 'setup', component: SetupPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HoverDirective,
    SearchPipe,
    HomePageComponent,
    SetupPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
