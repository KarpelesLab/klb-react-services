
declare type InternalUUID = string;
declare type UUID = string;
declare type URLString = string;
declare type UnkownYet = unknown;

declare type TimeUnit = {
    unix: number;
    us: URLString;
    iso: string;
    tz: 'UTC' | string; // add all possible values and remove | string
    full: string;
    unixms: string;
}

declare type Metric = {
    Metric__: InternalUUID;
    MetaObject__: InternalUUID;
    Token: string;
    Type: string;
    Category: string;
    Min_Value: UnkownYet | null;
    Max_Value: UnkownYet | null;
    Min_Alert: UnkownYet | null;
    Max_Alert: UnkownYet | null;
    Last_Raw_Value: string;
    Last_Value: string;
    Last_Value_Interval: string;
    Created: TimeUnit;
    Last_Updated: TimeUnit;
}

declare type Host = {
    Shell_Host__: InternalUUID;
    Shell_Datacenter__: InternalUUID
    Name: string;
    IP: string;
    Internal_IP: string;
    IPv6: string;
    NetV6: string;
    Product: string;
    Location: UnkownYet | null;
    Kernel: string;
    Enabled: string;
    Allocated: string;
    Available: string;
    Version: string;
    Created: TimeUnit;
    Last_Heartbeat: TimeUnit;
    Metrics: Metric[];

}

declare type OS = {
    Shell_OS__: InternalUUID;
    Icon_Blob__: UnkownYet | null;
    Name_Text__: InternalUUID;
    Description_Text__: UnkownYet | null;
    Short_Description_Text__: UnkownYet | null;
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
    Cmdline: UnkownYet | null;
    Index: string;
    Created: TimeUnit;
    Name: string;
}
declare type ShellDatacenter = {
    Shell_Datacenter__: InternalUUID;
    Country__: 'US' | string; // add all possible values and remove | string
    Name: string;
    Location: string;
    Latitude: string;
    Longitude: string;
}

declare type Price = {
    value: string;
    value_int: string;
    value_disp: string;
    display: string;
    display_short: string;
    currency: 'USD' | string; // add all possible values and remove | string
    has_vat: boolean;
    tax_profile: UnkownYet | null;
}

declare type MainPrice = Price & {
    raw: Price;
    tax: Price;
    tax_only: Price;
    tax_rate: number;
}

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
    Drive_Item__: UnkownYet | null;
    SKU: UnkownYet | null;
    Internal_Name: string;
    Product_Type: 'service' | string; // add all possible values and remove | string;
    Product_Class: 'regular' | string; // add all possible values and remove | string;
    Partner_Group_Key: UnkownYet | null;
    Visible: 'Y' | 'N';
    Created: TimeUnit;
    'Multiple.Image': UnkownYet[];
    'Basic.Tags': UnkownYet[];
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
    Image: UnkownYet[];
}

// add "X?" if attribute is optional , add "| null" if value can be null
// if attribute is string but it's an enum value, add all possible value instead of string;
// like OS: 'windows' | 'linux' | 'ubuntu'; instead of OS: string;
declare type Shell = {
    Shell__: InternalUUID;
    Shell_Datacenter__: InternalUUID;
    Shell_Host__: InternalUUID;
    Shell_OS__: InternalUUID;
    Shell_Volume__: InternalUUID;
    User_Billing__: UnkownYet | null;
    Catalog_Product__: InternalUUID;
    Keychain__: UnkownYet | null;
    Label: string;
    Engine: 'full' | string; // add all possible values and remove | string
    Boot: string;
    Size: number;
    Status: 'valid' | string; // add all possible values and remove | string
    State: 'running' | string; // add all possible values and remove | string
    Ssh_Port: number;
    Username: string;
    Hostname: string;
    Cdrom: UnkownYet | null;
    MAC: string;
    IPv4: string;
    IPv6: string | null;
    Created: TimeUnit;
    Expires: TimeUnit;
    Last_Snapshot: TimeUnit | null;
    Timer_Start: UnkownYet | null;
    Timer_Allowance: UnkownYet | null;
    Expire_Notification_Notice: string;
    Expire_Notification_Date: UnkownYet | null;
    UUID: UUID;
    IPs: string[];
    Host: Host;
    OS: OS;
    Ephemeral_Viewer: URLString;
    Shell_Datacenter: ShellDatacenter;
    Catalog_Product: CatalogProduct;
}
