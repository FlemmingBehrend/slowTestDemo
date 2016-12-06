import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {Consequence} from './domain-objects/Consequence';
import {ApiConfigService} from './api-config.service';

@Injectable()
export class ConsequenceService {

    constructor(private http: Http, private apiConfigService: ApiConfigService) {
    }

    getConsequences(id: string): Observable<Consequence> {
        return this.http.get(this.apiConfigService.getApiRoot() + 'consequence/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        return new Consequence().deserialize(res.json());
    }

    private handleError (error: any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    }

}
