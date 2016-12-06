import {Consequence} from './Consequence';
import {CONSEQUENCE} from './../mock-consequences';

describe('DomainObject: Consequence', function () {

    let domainObject;
    let json = {'consequence_id': '1', 'policy_holders': []};

    beforeEach(() => {
        domainObject = new Consequence();
    });

    it('id to be set when deserialize json', () => {
        domainObject.deserialize(json);
        expect(domainObject.id).toBe('1');
    });

    it('should be able to map sub domain objects', () => {
        json.policy_holders = [{
            'stakeholder_id': '124567',
            'stakeholder_name': 'Jakob',
            'eboks_top': true,
            'affected_insurances': []
        }, {
            'stakeholder_id': '444444',
            'stakeholder_name': 'Flemming',
            'eboks_top': false,
            'affected_insurances': []
        }];
        domainObject.deserialize(json);
        expect(domainObject.policy_holders.length).toBe(2);
        expect(domainObject.policy_holders[1].id).toBe('444444');
        expect(domainObject.policy_holders[1].name).toBe('Flemming');
        expect(domainObject.policy_holders[1].eboks_top).toBe(false);
    });

    it('should be able to map a hole graph', () => {
        domainObject.deserialize(CONSEQUENCE);
        expect(domainObject.id).toBe('12354');
        expect(domainObject.policy_holders[1].affected_insurances[0].actions[1].text).toBe('text1');
    });

});
