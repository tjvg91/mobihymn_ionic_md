import { createStore } from '@datorama/akita';

const initialState = {
    color: 'warning',
    dark: true
};

export const mobihymnSettingsStore = createStore(initialState, { name: 'mobihymn-settings' });