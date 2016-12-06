import {PeriodPrice} from './PeriodPrice';
import {Action} from './Action';
import {JsonConvertible} from './JsonConvertable';
import {ProductInfo} from './ProductInfo';

export class Insurance implements JsonConvertible<Insurance> {

    type: string;
    icon_id: string;
    product_info: ProductInfo;
    period_price: PeriodPrice;
    actions: Action[];

    deserialize(input): Insurance {
        this.type = input.customer_transaction_type;
        this.icon_id = input.product_category_icon_id;
        let productInfo = new ProductInfo();
        productInfo.description = input.object_description;
        productInfo.number = input.insurance_no;
        productInfo.name = input.product_internal_name;
        productInfo.status = input.insurance_status;
        this.product_info = productInfo;
        let price = new PeriodPrice();
        price.period_prize = input.period_prize;
        price.period_count_per_year = input.period_count_per_year;
        price.premium_date = new Date(input.premium_date);
        price.agreement_discount = input.agreement_discount;
        price.adjustment_discount = input.adjustment_discount;
        this.period_price = price;
        let actions: Action[] = [];
        for (let json of input.events) {
            let action = new Action();
            actions.push(action.deserialize(json));
        }
        this.actions = actions;
        return this;
    }

}
