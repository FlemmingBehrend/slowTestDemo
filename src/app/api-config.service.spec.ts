/* tslint:disable:no-unused-variable */
import {TestBed, inject} from '@angular/core/testing';
import {ApiConfigService} from './api-config.service';
import {WindowRefService} from './window-ref.service';

describe('Service: ApiConfig', () => {

    describe('running on localhost', () => {

        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    {provide: WindowRefService, useClass: MockWindowLocalhost},
                    ApiConfigService
                ]
            });
        });

        it('should point to localhost:9080/api when localhost is found in uri',
            inject([ApiConfigService], (service: ApiConfigService) => {
                expect(service.getApiRoot()).toBe('http://localhost:9080/api/');
            })
        );

    });

    describe('running on DSCM', () => {

        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    {provide: WindowRefService, useClass: MockWindowDSCM},
                    ApiConfigService
                ]
            });
        });

        it('should point to http://pp-konsekvensdscm119.topdanmark.local/api/ when dscm is found in uri',
            inject([ApiConfigService], (service: ApiConfigService) => {
                expect(service.getApiRoot()).toBe('http://pp-konsekvensdscm119.topdanmark.local/api/');
            })
        );

    });

    describe('running on prod test', () => {

        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    {provide: WindowRefService, useClass: MockWindowPROD},
                    ApiConfigService
                ]
            });
        });

        it('should point to http://pp-konsekvensprod.topdanmark.local/api/ when prod is found in uri',
            inject([ApiConfigService], (service: ApiConfigService) => {
                expect(service.getApiRoot()).toBe('http://pp-konsekvensprod.topdanmark.local/api/');
            })
        );

    });


});

export class MockWindowLocalhost {
    nativeWindow = {
        location: {
            origin: 'localhost'
        }
    };
}

export class MockWindowDSCM {
    nativeWindow = {
        location: {
            origin: 'http://pp-konsekvens-frontdscm119.topdanmark.local/'
        }
    };
}

export class MockWindowPROD {
    nativeWindow = {
        location: {
            origin: 'http://pp-konsekvens-frontprod.topdanmark.local/'
        }
    };
}
