import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutesModule } from './routes/routes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { workingRangeModule } from './routes/workingRange/workingRange.moudule';
import { HttpClientModule } from '@angular/common/http';
import { codeModule } from './routes/code/code.moudule';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutesModule,
    BrowserAnimationsModule,
    LayoutModule,
    workingRangeModule,
    HttpClientModule,
    codeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
