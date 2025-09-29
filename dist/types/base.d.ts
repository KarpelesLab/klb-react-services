declare type InternalUUID = string;
declare type UUID = string;
declare type URLString = string;
declare type UnknownYet = unknown;

declare type TimeUnit = {
    unix: number;
    us: number;
    iso: string;
    tz: 'UTC' | string; // add all possible values and remove | string
    full: string;
    unixms: string;
}

export const InternalUUID;
export const UUID;
export const URLString;
export const UnknownYet;
