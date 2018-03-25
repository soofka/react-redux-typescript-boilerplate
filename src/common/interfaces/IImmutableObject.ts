import { Map } from 'immutable';

export interface IImmutableObject<T> extends Map<string | number, any> {
  get<K extends keyof T>(name: K): T[K];
}

export default IImmutableObject;
