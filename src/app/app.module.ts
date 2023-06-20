import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './features/shared/shared.module';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { metaReducers } from './core/store/core/meta-reducers';
import { reducers } from './core/store/core/core.reducer';
import { CoreEffects } from './core/store/core/core.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule,

    RouterModule.forRoot([], {
      bindToComponentInputs: true,
    }),

    StoreModule.forRoot({ core: reducers }, { metaReducers }),
    EffectsModule.forRoot([CoreEffects]),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
