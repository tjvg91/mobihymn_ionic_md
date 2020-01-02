import { ID } from '@datorama/akita';

export interface Hymn {
    id: ID;
    number: string;
    title: string;
    hymnalId: ID;
    lyrics: string;
    firstLine: string;
    midi: string;
}
