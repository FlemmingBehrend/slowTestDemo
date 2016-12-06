import {Insurance} from './Insurance';
import {JsonConvertible} from './JsonConvertable';
export class Stakeholder implements JsonConvertible<Stakeholder> {

    id: string;
    eboks_top: boolean;
    name: string;
    affected_insurances: Insurance[];

    deserialize(input): Stakeholder {
        this.id = input.stakeholder_id;
        this.name = input.stakeholder_name;
        this.eboks_top = input.eboks_top;
        let affected_insurances: Insurance[] = [];
        for (let json of input.affected_insurances) {
            let insurance = new Insurance();
            affected_insurances.push(insurance.deserialize(json));
        }
        this.affected_insurances = affected_insurances;
        return this;
    }

}
