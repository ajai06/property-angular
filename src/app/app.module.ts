import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ResendMailComponent } from './resend-mail/resend-mail.component';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { AddpgComponent } from './addpg/addpg.component';
import { MypostsComponent } from './myposts/myposts.component';
import { PgDeatilsComponent } from './pg-deatils/pg-deatils.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ResendMailComponent,
    AddpgComponent,
    MypostsComponent,
    PgDeatilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard,
             {
               provide: HTTP_INTERCEPTORS,
               useClass: TokenInterceptorService,
               multi: true
             }],
  bootstrap: [AppComponent]
})
export class AppModule { }
