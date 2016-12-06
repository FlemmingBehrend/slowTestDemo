export interface JsonConvertible<T> {
    deserialize(input: Object): T;
}
