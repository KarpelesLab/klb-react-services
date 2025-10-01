import {InternalUUID, TimeUnit, UnknownYet} from "../base";

declare type Metric = {
    Metric__: InternalUUID;
    MetaObject__: InternalUUID;
    Token: string;
    Type: string;
    Category: string;
    Min_Value: UnknownYet | null;
    Max_Value: UnknownYet | null;
    Min_Alert: UnknownYet | null;
    Max_Alert: UnknownYet | null;
    Last_Raw_Value: string;
    Last_Value: string;
    Last_Value_Interval: string;
    Created: TimeUnit;
    Last_Updated: TimeUnit;
}

export default Metric;
