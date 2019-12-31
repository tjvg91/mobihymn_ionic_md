import { createStore } from '@datorama/akita';

const initialState = {
    color: 'warning',
    dark: false
};

export const mobihymnSettingsStore = createStore(initialState, { name: 'mobihymn-settings' });