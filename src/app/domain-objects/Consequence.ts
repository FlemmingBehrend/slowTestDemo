import {JsonConvertible} from './JsonConvertable';
import {Stakeholder} from './Stakeholder';

export class Consequence implements JsonConvertible<Consequence> {

    id: string;
    policy_holders: Stakeholder[];

    deserialize(input): Consequence {
        this.id = input.consequence_id;
        let stakeholders: Stakeholder[] = [];
        for (let json of input.policy_holders) {
            let stakeholder = new Stakeholder();
            stakeholders.push(stakeholder.deserialize(json));
        }
        this.policy_holders = stakeholders;
        return this;
    }

}
