import {JsonConvertible} from './JsonConvertable';
export class Action implements JsonConvertible<Action> {

    event_type: string;
    text: string;

    deserialize(input): Action {
        this.event_type = input.event_type;
        this.text = input.text;
        return this;
    }

}
