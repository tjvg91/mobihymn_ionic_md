import { mobihymnSettingsStore } from './mobihymn-settings.store';

export async function updateColor(value: string) {
  await Promise.resolve();
  mobihymnSettingsStore.update(state => {
    return {
      ...state,
      color: value
    };
  });
}

export async function updateTheme(value: boolean) {
  await Promise.resolve();
  mobihymnSettingsStore.update(state => {
    return {
      ...state,
      dark: value
    };
  });
}