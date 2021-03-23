import Metric from "../metric";
import {InternalUUID, TimeUnit, UnknownYet} from "../../base";

declare type ShellHost = {
    Shell_Host__: InternalUUID;
    Shell_Datacenter__: InternalUUID
    Name: string;
    IP: string;
    Internal_IP: string;
    IPv6: string;
    NetV6: string;
    Product: string;
    Location: UnknownYet | null;
    Kernel: string;
    Enabled: string;
    Allocated: string;
    Available: string;
    Version: string;
    Created: TimeUnit;
    Last_Heartbeat: TimeUnit;
    Metrics: Metric[];
};

export default ShellHost;
