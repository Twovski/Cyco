import { getRootData } from '@sapphire/pieces'
import { join } from 'node:path';

const mainFolder = getRootData().root;
export const rootFolder = join(mainFolder, '..');
