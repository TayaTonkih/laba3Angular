import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Page3Component } from './pages/page3/page3.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ShowNameComponent } from './pages/show-name/show-name.component';
import { confirmInGuard } from './core/guards/confirm-in.guard';
import { confirmOutGuard } from './core/guards/confirm-out.guard';
import { ItalicDirective } from './core/guards/directive/italic.directive';


const appRoutes: Routes = [
  { path: '', component: Page1Component },
  { path: 'page2', component: Page2Component, canActivate: [confirmInGuard] },
  { path: 'page3', component: Page3Component, canDeactivate: [confirmOutGuard] },
  { path: 'show-name/:name', component: ShowNameComponent },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    Page3Component,
    NotFoundComponent,
    ShowNameComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
