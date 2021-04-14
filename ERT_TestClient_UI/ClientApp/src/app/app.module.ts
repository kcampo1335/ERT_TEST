import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LoginComponent } from './login/login.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MetadataDialogComponent } from './metadata-dialog/metadata-dialog.component';
import { ProfileComponent } from './profile/profile.component';
import { AudioComponent } from './audio/audio.component';
import { MetadataEnvironmentComponent } from './metadata-environment/metadata-environment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LoginComponent,
    CounterComponent,
    FetchDataComponent,
    HomePageComponent,
    MetadataDialogComponent,
    ProfileComponent,
    AudioComponent,
    MetadataEnvironmentComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'home-page', component: HomePageComponent },
      { path: 'metadata-dialog', component: MetadataDialogComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'audio', component: AudioComponent },
      { path: 'metadata-environment', component: MetadataEnvironmentComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
