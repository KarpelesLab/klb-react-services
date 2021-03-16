import {TimeUnit, UUID} from "../base";
import {UserProfile} from "./user/profile";
import {UserGroup} from "./user/group";

export declare type UserAgreement = {
    tos?: boolean;
}

export declare type User = {
    Agreements: UserAgreement;
    Created: TimeUnit;
    Current_Group: UserGroup;
    Default_Billing_User_Location__: UUID | null;
    Default_License_User_Location__: UUID | null;
    Default_Shipping_User_Location__: UUID | null;
    Email: string;
    Has_Password: boolean;
    Language__: string;
    Profile: UserProfile;
    User_Profile__: UUID;
    User__: UUID;
    Status: 'shadow' | 'valid' | 'sub' | 'banned' | 'delete_pending' | 'deleted' | 'validating' | 'compromised' | 'frozen' | 'expired' | 'purged';
}

