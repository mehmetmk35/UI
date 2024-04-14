
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common'; 
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner'; 
import { AppRoutingModule } from './app-routing.module';
import { UiModule } from './ui/ui.module';
import { HttpErrorHandlerInterceptorService } from './services/common/http-error-handler-interceptor.service';
 

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,   
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    FormsModule,
    HttpClientModule, 
    AppRoutingModule,
    UiModule

  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
    , { provide: "baseUrl", useValue: "https://localhost:7266/api", multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorHandlerInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
