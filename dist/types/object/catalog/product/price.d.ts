import {UnknownYet} from "../../../base";

declare type Price = {
    value: string;
    value_int: string;
    value_disp: string;
    display: string;
    display_short: string;
    currency: 'USD' | string; // add all possible values and remove | string
    has_vat: boolean;
    tax_profile: UnknownYet | null;
}

declare type MainPrice = Price & {
    raw: Price;
    tax: Price;
    tax_only: Price;
    tax_rate: number;
}

export default MainPrice;
