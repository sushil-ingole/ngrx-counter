import { CUSTOM_ELEMENTS_SCHEMA, NgModule, isDevMode } from "@angular/core";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { BrowserModule } from "@angular/platform-browser";
import { CounterComponent } from "./counter/counter/counter.component";
import { CounterOutputComponent } from "./counter/counter-output/counter-output.component";
import { CounterButtonsComponent } from "./counter/counter-buttons/counter-buttons.component";
import { CustomCounterInputComponent } from "./counter/custom-counter-input/custom-counter-input.component";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { counterReducer } from "./counter/state1/counter1.reducer";

@NgModule({
    declarations: [AppComponent, CounterComponent, CounterOutputComponent, CounterButtonsComponent, CustomCounterInputComponent],
    imports: [BrowserModule,
        StoreModule.forRoot({ counter: counterReducer }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})

export class AppModule { };