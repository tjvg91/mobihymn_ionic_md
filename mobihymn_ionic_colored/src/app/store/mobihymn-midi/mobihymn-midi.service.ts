import { mobihymnMidiStore } from './mobihymn-midi.store';
import { Hymn } from '../models/hymn';


export async function set(hymns: Hymn[]) {
  mobihymnMidiStore.set(hymns);
}
