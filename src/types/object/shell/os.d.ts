import '../../base'
import {InternalUUID, TimeUnit, UnknownYet, URLString} from "../../base";

declare type ShellOS = {
    Shell_OS__: InternalUUID;
    Icon_Blob__: UnknownYet | null;
    Name_Text__: InternalUUID;
    Description_Text__: UnknownYet | null;
    Short_Description_Text__: UnknownYet | null;
    Code: 'android-x86' | string; // add all possible values and remove | string
    URL: URLString | null;
    Default: 'N' | 'Y';
    Ready: 'N' | 'Y';
    Visible: 'N' | 'Y';
    Beta: 'N' | 'Y';
    Public: 'N' | 'Y';
    Family: 'android' | string; // add all possible values and remove | string
    Boot: 'bios' | string; // add all possible values and remove | string
    CPU: 'x86_64' | string; // add all possible values and remove | string
    Sound_Device: 'ich6' | string; // add all possible values and remove | string
    Cmdline: UnknownYet | null;
    Index: string;
    Created: TimeUnit;
    Name: string;
}

export default ShellOS;
