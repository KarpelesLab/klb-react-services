import {UUID} from "../../base";

export declare type UserGroupOwner = {
    _key: UUID;
    type: string;
}

export declare type UserGroup = {
    Name: string;
    Nickname: string | null;
    Owner: UserGroupOwner;
    Type: 'user' | 'group';
    Status: 'released' | 'beta' | 'alpha' | 'private';
    User_Group__: UUID;
    User__: UUID;

}
