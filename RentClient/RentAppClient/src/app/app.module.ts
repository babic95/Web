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
import { ReservationPageComponent } from './reservation-page/reservation-page.component';
import { MainComponent } from './main/main.component';
import { BranchOfficeComponent } from './branch-office/branch-office.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { CanActivateViaAuthGuard } from './guard/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/interceptor';

import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';
import { TruncateModule } from 'ng2-truncate';
import { AddBranchOfficeComponent } from './add-branch-office/add-branch-office.component';
import { AddVecihleComponent } from './add-vecihle/add-vecihle.component';
import { AgmCoreModule } from '@agm/core';
import { UploadUserPictureComponent } from './upload-user-picture/upload-user-picture.component';

const Routes = [
  
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full',
  },
  {
    path: "start",
    component: StartPageComponent
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
    path: "reservation/:IdService/:IdVehicle",
    component: ReservationPageComponent
  },
  {
    path: "addService",
    component: AddServiceComponent
  },
  {
    path: "addBranchOffice/:IdService",
    component: AddBranchOfficeComponent
  },
  {
    path: "addVehicle/:IdService",
    component: AddVecihleComponent
  },
  {
    path: "addVehicle/:IdService/:IdVehicle",
    component: AddVecihleComponent
  },
  {
    path: "uploadUserPicture",
    component: UploadUserPictureComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    LoginComponent,
    RegistrationComponent,
    ServicePageComponent,
    ReservationPageComponent,
    MainComponent,
    BranchOfficeComponent,
    AddServiceComponent,
    FileSelectDirective,
    FileDropDirective,
    AddBranchOfficeComponent,
    AddVecihleComponent,
    UploadUserPictureComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    HttpModule,
    HttpClientModule,
    HttpClientXsrfModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDnihJyw_34z5S1KZXp90pfTGAqhFszNJk'}),
    Ng2CarouselamosModule
  ],
  providers: [/*
    CanActivateViaAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: 'CanAlwaysActivateGuard',
      useValue: () => {
        return true;
      }
    },
    {
      provide: 'CanAll',
      useValue: () => {
        if(localStorage.jwt){
          return true;
        }
      } 
    }*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
