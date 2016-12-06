import {Insurance} from './Insurance';
describe('DomainObject: Insurance', () => {

    let domainObject;
    const NOVEMBER = 10;
    let json = {
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
    };

    beforeEach(() => {
        domainObject = new Insurance();
    });

    it('should map values from json to domain object', () => {
        domainObject.deserialize(json);
        expect(domainObject.product_info.number).toBe('1234567890');
        expect(domainObject.product_info.status).toBe('L');
        expect(domainObject.product_info.name).toBe('DB Hus');
        expect(domainObject.product_info.description).toBe('Borupvang 4');
        expect(domainObject.icon_id).toBe('12345');
        expect(domainObject.period_price.adjustment_discount).toBe(-103);
        expect(domainObject.period_price.agreement_discount).toBe(220);
        expect(domainObject.period_price.period_count_per_year).toBe(1);
        expect(domainObject.period_price.period_prize).toBe(1024);
        expect(domainObject.period_price.premium_date.getDate()).toBe(22);
        expect(domainObject.period_price.premium_date.getMonth()).toBe(NOVEMBER);
        expect(domainObject.period_price.premium_date.getFullYear()).toBe(2016);
        expect(domainObject.actions.length).toBe(0);
    });

    it('should be able to map sub domain object events', () => {
        json.events = [{
            'event_type': 'test key1',
            'text': 'test text1'
        }, {
            'event_type': 'test key2',
            'text': 'test text2'
        }];
        domainObject.deserialize(json);
        expect(domainObject.actions.length).toBe(2);
        expect(domainObject.actions[0].text).toBe('test text1');
        expect(domainObject.actions[1].text).toBe('test text2');
    });

});
