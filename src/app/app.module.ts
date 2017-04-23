import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { people } from './reducers/people';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './containers/app.component';
import { PersonlistComponent } from './components/personlist.component';
import { PersoninputComponent } from './components/personinput.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonlistComponent,
    PersoninputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ people }),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
