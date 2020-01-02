import { createEntityStore, EntityState } from '@datorama/akita';
import { Hymn } from '../models/hymn';

const initialState = {};

export interface MobihymnMidiState extends EntityState<Hymn, string> { }

export const mobihymnMidiStore = createEntityStore<MobihymnMidiState>(initialState, {
  name: 'mobihymn-midi'
});

