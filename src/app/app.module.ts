import {BrowserModule} from '@angular/platform-browser';
import {NgModule, LOCALE_ID} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {AppComponent} from './app.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {ConsequencesComponent} from './consequences/consequences.component';
import {StakeholderComponent} from './stakeholder/stakeholder.component';
import {AffectedInsuranceComponent} from './affected-insurance/affected-insurance.component';
import {HeaderInfoComponent} from './header-info/header-info.component';
import {PriceInfoComponent} from './price-info/price-info.component';
import {ActionListComponent} from './action-list/action-list.component';
import {ErrorComponent} from './error/error.component';
import {ConsequenceService} from './consequence.service';
import {ApiConfigService} from './api-config.service';
import {WindowRefService} from './window-ref.service';

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        ConsequencesComponent,
        StakeholderComponent,
        AffectedInsuranceComponent,
        HeaderInfoComponent,
        PriceInfoComponent,
        ActionListComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot()
    ],
    providers: [
        {provide: LOCALE_ID, useValue: 'da'},
        WindowRefService,
        ApiConfigService,
        ConsequenceService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
