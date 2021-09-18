import * as g from './greet.json';

export const x = g['greet'] as string; // yes, a typing error
