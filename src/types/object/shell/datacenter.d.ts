import {InternalUUID} from "../../base";

declare type ShellDatacenter = {
    Shell_Datacenter__: InternalUUID;
    Country__: 'US' | string; // add all possible values and remove | string
    Name: string;
    Location: string;
    Latitude: string;
    Longitude: string;
}

export default ShellDatacenter;
