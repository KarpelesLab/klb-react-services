import MainPrice from "./product/price";
import {InternalUUID, TimeUnit, UnknownYet} from "../../base";

declare type CatalogProduct = {
    _sold: string;
    'Affiliate.PaymentRate': string;
    'Basic.Decorator': string;
    'Basic.Name': string;
    'Basic.Priority': number;
    'Basic.ServiceLifetime': string;
    'Description.AuthorCode': string;
    'Description.CatchPhrase': string;
    'Description.Short': string;
    'Description.Type': 'shell_plan' | string; // add all possible values and remove | string
    'Shell.Size': string;
    Catalog_Product__: InternalUUID;
    Catalog__: InternalUUID;
    Parent_Catalog_Product__: InternalUUID;
    Drive_Item__: UnknownYet | null;
    SKU: UnknownYet | null;
    Internal_Name: string;
    Product_Type: 'service' | string; // add all possible values and remove | string;
    Product_Class: 'regular' | string; // add all possible values and remove | string;
    Partner_Group_Key: UnknownYet | null;
    Visible: 'Y' | 'N';
    Created: TimeUnit;
    'Multiple.Image': UnknownYet[];
    'Basic.Tags': UnknownYet[];
    HasChild: boolean;
    'Price.Catalog_Product_Price__': InternalUUID;
    'Price.Catalog_Product__': InternalUUID;
    'Price.Realm__': InternalUUID;
    'Price.Start_Date': TimeUnit;
    'Price.End_Date': TimeUnit | null;
    'Price.Price': MainPrice;
    'Price.Public_Price': MainPrice;
    'Price.Currency__': 'USD' | string; // add all possible values and remove | string;
    'Price.Discount': 'Y' | 'N';
    'Price.Updated': string;
    'Basic.Trigger': 'Shell' | string; // add all possible values and remove | string;
    'Price.Monthly': MainPrice;
    'Meta.quantity': number;
    Price: MainPrice;
    Public_Price: MainPrice;
    Image: UnknownYet[];
}

export default CatalogProduct;
