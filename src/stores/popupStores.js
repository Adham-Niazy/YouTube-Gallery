import { writable } from 'svelte/store';

export const isSelectCollectionOpen = writable(false);
export const isWatchVideoOpen = writable(false);
export const currentVideoID = writable(null);