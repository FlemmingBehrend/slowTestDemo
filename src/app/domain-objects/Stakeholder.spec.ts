import {Stakeholder} from './Stakeholder';
describe('DomainObject: Stakeholder', () => {

    let domainObject;
    let json = {
        'stakeholder_id': '124567',
        'stakeholder_name': 'Jakob',
        'eboks_top': true,
        'affected_insurances': []
    };

    beforeEach(() => {
        domainObject = new Stakeholder();
    });

    it('should map values from json to domain object', () => {
        domainObject.deserialize(json);
        expect(domainObject.id).toBe('124567');
        expect(domainObject.name).toBe('Jakob');
        expect(domainObject.eboks_top).toBe(true);
        expect(domainObject.affected_insurances.length).toBe(0);
    });

    it('should be able to map sub domain object', () => {
        json.affected_insurances = [{
            'insurance_no': '1234567890',
            'insurance_status': 'L',
            'customer_transaction_type': 'Nytegning',
            'object_description': 'Borupvang 4',
            'product_internal_name': 'DB Hus',
            'product_category_icon_id': '12345',
            'premium_date': '2016-11-22',
            'period_count_per_year': 1,
            'period_prize': 1024,
            'agreement_discount': 220,
            'adjustment_discount': -103,
            'events': []
        }];
        domainObject.deserialize(json);
        expect(domainObject.affected_insurances.length).toBe(1);
        expect(domainObject.affected_insurances[0].product_info.status).toBe('L');
    });

});
