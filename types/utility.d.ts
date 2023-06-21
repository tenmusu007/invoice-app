/**
 * Unpacks a type from an array or object
 * If T has property K, then return the type of that property
 * @examples
 * export type Items = {
        name: string;
        quantity: string;
        unitPrice: string;
        tax: string;
        amount: number;
        }[];
 * type T1 = Unpacked<Items>; 
 * type T1 = { name: string; quantity: string; unitPrice: string; tax: string; amount: number; }
 * 
 * type Person = {
    name: string;
    age: number;
    isActive: boolean;
    };
    type UnpackedPerson = string | number | boolean;
 */
export type Unpacked<T> = T extends { [K in keyof T]: infer U } ? U : never;
