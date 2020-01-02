import { createEntityQuery } from '@datorama/akita';
import { mobihymnMidiStore } from './mobihymn-midi.store';

export const mobihymnMidiQuery = createEntityQuery(mobihymnMidiStore);
