import { join } from 'node:path';
import { setup } from '@skyra/env-utilities';
import { rootFolder } from '#utils/constants/rootFolder';

setup(join(rootFolder, '.env'));