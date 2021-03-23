import CatalogProduct from "./catalog/product";
import ShellHost from "./shell/host";
import ShellOS from "./shell/os";
import ShellDatacenter from "./shell/datacenter";
import {InternalUUID, TimeUnit, UnknownYet, URLString, UUID} from "../base";


// add "X?" if attribute is optional , add "| null" if value can be null
// if attribute is string but it's an enum value, add all possible value instead of string;
// like OS: 'windows' | 'linux' | 'ubuntu'; instead of OS: string;
declare type Shell = {
    Shell__: InternalUUID;
    Shell_Datacenter__: InternalUUID;
    Shell_Host__: InternalUUID;
    Shell_OS__: InternalUUID;
    Shell_Volume__: InternalUUID;
    User_Billing__: UnknownYet | null;
    Catalog_Product__: InternalUUID;
    Keychain__: UnknownYet | null;
    Label: string;
    Engine: 'full' | string; // add all possible values and remove | string
    Boot: string;
    Size: number;
    Status: 'valid' | string; // add all possible values and remove | string
    State: 'running' | string; // add all possible values and remove | string
    Ssh_Port: number;
    Username: string;
    Hostname: string;
    Cdrom: UnknownYet | null;
    MAC: string;
    IPv4: string;
    IPv6: string | null;
    Created: TimeUnit;
    Expires: TimeUnit;
    Last_Snapshot: TimeUnit | null;
    Timer_Start: UnknownYet | null;
    Timer_Allowance: UnknownYet | null;
    Expire_Notification_Notice: string;
    Expire_Notification_Date: UnknownYet | null;
    UUID: UUID;
    IPs: string[];
    Host: ShellHost;
    OS: ShellOS;
    Ephemeral_Viewer: URLString;
    Shell_Datacenter: ShellDatacenter;
    Catalog_Product: CatalogProduct;
}

export default Shell;
