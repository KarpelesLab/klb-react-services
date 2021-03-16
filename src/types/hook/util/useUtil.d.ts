export declare type UseTwoStepValidationTuples<T> = [(session, code) => Promise<T>, boolean];
export declare const useTwoStepValidation: <T>() => UseTwoStepValidationTuples<T>;
