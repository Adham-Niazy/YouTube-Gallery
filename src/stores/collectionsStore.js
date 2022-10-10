import { writable } from 'svelte/store';
import { LOCALSTORAGE_COLLECTIONS_KEY, LOCALSTORAGE_COLLECTIONS_LENGTH_KEY } from './localStorageUtils';

export const collections = writable({});
export const collectionsLength = writable(0);

if (typeof localStorage !== 'undefined') {
  collections.set(JSON.parse(localStorage[LOCALSTORAGE_COLLECTIONS_KEY] || '{}'));
  collectionsLength.set(+(localStorage[LOCALSTORAGE_COLLECTIONS_LENGTH_KEY] || '0'));


  collections.subscribe(update => localStorage[LOCALSTORAGE_COLLECTIONS_KEY] = JSON.stringify(update));
  collectionsLength.subscribe(update => localStorage[LOCALSTORAGE_COLLECTIONS_LENGTH_KEY] = update + '');
}
