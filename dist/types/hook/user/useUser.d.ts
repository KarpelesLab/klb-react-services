import {User} from "../../object";
import {UUID} from "../../base";
import {UseActionTuple} from "../base";

export declare type UseUserChangePasswordTuples = [(old_password: string | null, password: string) => Promise<User>, boolean];
export declare const useUser: (id: UUID | '@') => UseUserChangePasswordTuples;

export declare type UseUserSetEmailTuples = [(email: string, password?: string) => Promise<User>, boolean];
export declare const useUserSetEmail: (id: UUID | '@') => UseUserSetEmailTuples;

export declare const useUserLogout: () => UseActionTuple<boolean>
