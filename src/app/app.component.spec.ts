/* tslint:disable:no-unused-variable */
import {TestBed, async} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {ConsequencesComponent} from "./consequences/consequences.component";
import {StakeholderComponent} from "./stakeholder/stakeholder.component";
import {AffectedInsuranceComponent} from "./affected-insurance/affected-insurance.component";
import {HeaderInfoComponent} from "./header-info/header-info.component";
import {PriceInfoComponent} from "./price-info/price-info.component";
import {ActionListComponent} from "./action-list/action-list.component";
import {ErrorComponent} from "./error/error.component";
import {ConsequenceService} from "./consequence.service";
import {ApiConfigService} from "./api-config.service";
import {WindowRefService} from "./window-ref.service";
import {NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {MaterialModule} from "@angular/material";

describe('AppComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
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
            providers: [
                ConsequenceService,
                ApiConfigService,
                WindowRefService
            ],
            imports: [
                MaterialModule.forRoot()
            ],
            schemas: [
              NO_ERRORS_SCHEMA
            ]
        });
    });

    it('should create the app', async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should have as title 'Konsekvens'`, async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Konsekvens');
    }));

});
