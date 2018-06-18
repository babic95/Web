import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { ServicePageCommentComponent } from './service-page-comment/service-page-comment.component';
import { ReservationPageComponent } from './reservation-page/reservation-page.component';
import { MainComponent } from './main/main.component';
import { BranchOfficeComponent } from './branch-office/branch-office.component';
import { AddServiceComponent } from './add-service/add-service.component';

import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';
import { TruncateModule } from 'ng2-truncate';

const Routes = [
  
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full',
  },
  {
    path: "start",
    component: StartPageComponent,
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "registration",
    component: RegistrationComponent
  },
  {
    path: "service/:IdService",
    component: ServicePageComponent
  },
  {
    path: "comment/:IdService",
    component: ServicePageCommentComponent
  },
  {
    path: "reservation/:IdService/:IdVehicle",
    component: ReservationPageComponent
  },
  {
    path: "addService",
    component: AddServiceComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    LoginComponent,
    RegistrationComponent,
    ServicePageComponent,
    ServicePageCommentComponent,
    ReservationPageComponent,
    MainComponent,
    BranchOfficeComponent,
    AddServiceComponent,
    FileSelectDirective,
    FileDropDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    HttpModule,
    HttpClientModule,
    HttpClientXsrfModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
