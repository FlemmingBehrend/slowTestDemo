import {Injectable} from '@angular/core';
import {WindowRefService} from './window-ref.service';

@Injectable()
export class ApiConfigService {
    private _apiRoot: string;

    constructor(private windowReferenceService: WindowRefService) {
        let origin = this.windowReferenceService.nativeWindow.location.origin;
        if (this.runningLocalFrontend(origin)) {
            this._apiRoot = 'http://localhost:9080/api/';
        } else {
            this._apiRoot = origin.replace('-front', '') + 'api/';
        }
    }

    getApiRoot(): string {
        return this._apiRoot;
    }

    private runningLocalFrontend(origin) {
        return origin.search('localhost') !== -1;
    }

}
