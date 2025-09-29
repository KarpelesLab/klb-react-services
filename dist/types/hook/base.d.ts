import {URLString} from "../base";

export declare type HTTPResponsePaging = {
    count: string;
    page_max: number;
    page_no: number;
    results_per_page: number;
}

export declare type HTTPResponsePayload<T> = {
    access: any;
    data: T[];
    paging: HTTPResponsePaging;
    result: 'valid' | 'error';
    time: number;
}

export declare type HTTPResponsePayloadList<T> = HTTPResponsePayload<T> & {
    data: T[];
    paging: HTTPResponsePaging;
}

export declare type HTTPResponseError = {
    code: number;
    error: string;
    exception: string;
    message?: string;
    request: string;
    result: 'redirect' | 'error';
    token: string;
    time: number;
}

export declare type HTTPResponseRedirect = HTTPResponseError & {
    redirect_code: number;
    redirect_url: URLString;
}

export declare type HTTPResponse<T> = HTTPResponseError | HTTPResponseRedirect | HTTPResponsePayload<T>
export declare type HTTPResponseList<T> = HTTPResponseError | HTTPResponseRedirect | HTTPResponsePayloadList<T>

export declare type UseResourceTuples<T> = [HTTPResponse<T> | null, (T?: T) => Promise<HTTPResponse<T>>, boolean];

export declare type UseResourceListPaging = { page_no?: number; results_per_page?: number }
export declare type UseResourceListTuples<T> = [HTTPResponseList<T> | null, (filter: any, paging?: UseResourceListPaging) => Promise<HTTPResponseList<T>>, boolean, (index: number, T: T) => void];

export declare type UseActionDo<T> = (params?: any, overrideRestSettings?: RestSetting<T>) => Promise<T>
export declare type UseActionTuple<T> = [UseActionDo<T>, boolean];


export declare type HTTPMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT'

export declare type RestSetting<T> = {
    snackMessageToken?: string;
    snackMessageSeverity?: 'success' | 'error' | 'warning';
    catchRedirect?: boolean;
    handleError?: boolean;
    rawResult?: boolean;
    innerThen?: (T: T) => any;
}

export declare const useResource: <T>(endpoint: string) => UseResourceTuples<T>;
export declare const useResourceList: <T>(endpoint: string) => UseResourceListTuples<T>;
export declare const useAction: <T>(endpoint: string, method?: HTTPMethod, restSettings?: RestSetting<T>) => UseActionTuple<T>;

