import {Action} from './Action';
describe('DomainObject: Action', () => {

    let domainObject;

    beforeEach(() => {
        domainObject = new Action();
    });

    it('should map values from json to domain object', () => {
        domainObject.deserialize({
            'event_type': 'test key',
            'text': 'test text'
        });
        expect(domainObject.event_type).toBe('test key');
        expect(domainObject.text).toBe('test text');
    });

});
