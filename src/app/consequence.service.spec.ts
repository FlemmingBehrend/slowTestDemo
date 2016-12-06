import {ConsequenceService} from './consequence.service';
import {inject, async, TestBed} from '@angular/core/testing';
import {Http, HttpModule, XHRBackend, Response, ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {Consequence} from './domain-objects/Consequence';
import {CONSEQUENCE} from './mock-consequences';
import {Stakeholder} from './domain-objects/Stakeholder';
import {Insurance} from './domain-objects/Insurance';
import {Observable} from 'rxjs';
import {ApiConfigService} from './api-config.service';

describe('Service: ConsequenceService', () => {

    beforeEach(async(() => {
        let fixture = TestBed.configureTestingModule({
            imports: [
                HttpModule
            ],
            providers: [
                ConsequenceService,
                {provide: ApiConfigService, useClass: MockApiConfigService},
                {provide: XHRBackend, useClass: MockBackend}
            ]
        });
        fixture.compileComponents();
    }));

    it('can instantiate the service when injected', inject([ConsequenceService], (service: ConsequenceService) => {
        expect(service instanceof ConsequenceService).toBe(true);
    }));

    it('can instantiate the service with "new"', inject([Http, ApiConfigService], (http: Http, apiConfigService: ApiConfigService) => {
        expect(http).not.toBeNull('http should be provided');
        let service = new ConsequenceService(http, apiConfigService);
        expect(service instanceof ConsequenceService).toBe(true);
    }));

    it('can provide the mockBackend as XHRBackend', inject([XHRBackend], (backend: XHRBackend) => {
        expect(backend).not.toBeNull('backend should be provided');
        expect(backend instanceof MockBackend).toBe(true);
    }));

    describe('when getting consequences', () => {

        let backend: MockBackend;
        let service: ConsequenceService;
        let response: Response;

        beforeEach(inject([Http, XHRBackend, ApiConfigService], (http: Http, be: MockBackend, apiConfigService: ApiConfigService) => {
            backend = be;
            service = new ConsequenceService(http, apiConfigService);
            let options = new ResponseOptions({status: 200, body: CONSEQUENCE});
            response = new Response(options);
        }));

        it('should subscribe to an instance of Consequence', async(inject([], () => {
            backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));
            service.getConsequences('123456789')
                .do(consequence => {
                    expect(consequence instanceof Consequence).toBeTruthy();
                })
                .toPromise();
        })));

        it('should have expected fake consequences', async(inject([], () => {
            backend.connections.subscribe((c: MockConnection) => {
                expect(c.request.url).toBe('localhost/api/consequence/123456789');
                c.mockRespond(response);
            });
            service.getConsequences('123456789')
                .do(consequences => {
                    expect(consequences.id).toBe(CONSEQUENCE.consequence_id);
                })
                .toPromise();
        })));

        it('should deserialize policy holders into stakeholder objects', async(inject([], () => {
            backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));
            service.getConsequences('123456789')
                .do(consequence => {
                    expect(consequence.policy_holders[1] instanceof Stakeholder).toBeTruthy();
                })
                .toPromise();
        })));

        it('should deserialize effected insurances into insurance objects', async(inject([], () => {
            backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));
            service.getConsequences('123456789')
                .do(consequence => {
                    expect(consequence.policy_holders[1].affected_insurances[0] instanceof Insurance).toBeTruthy();
                })
                .toPromise();
        })));

        it('should deserialize events into action objects', async(inject([], () => {
            backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));
            service.getConsequences('123456789')
                .do(consequence => {
                    let actions = consequence.policy_holders[1].affected_insurances[0].actions;
                    expect(actions.length).toBe(2);
                    expect(actions[1].text).toBe('text1');
                })
                .toPromise();
        })));

    });

    describe('when errors', () => {

        let backend: MockBackend;
        let service: ConsequenceService;
        let response: Response;

        beforeEach(inject([Http, XHRBackend, ApiConfigService], (http: Http, be: MockBackend, apiConfigService: ApiConfigService) => {
            backend = be;
            service = new ConsequenceService(http, apiConfigService);
            let options = new ResponseOptions({
                status: 400
            });
            response = new Response(options);
        }));

        it('should give an error when we receive a client response code', async(inject([], () => {
            backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));
            service.getConsequences('123456789')
                .do(
                    consequence => fail('should not return properly')
                )
                .catch(error => {
                    expect(error).toBeDefined();
                    expect(error).toBe('Bad response status: 400');
                    return Observable.of(null);
                })
                .toPromise();
        })));

    });

});

export class MockApiConfigService {
    getApiRoot() {
        return 'localhost/api/';
    }
}
