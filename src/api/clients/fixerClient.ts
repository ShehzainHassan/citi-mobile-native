import { createAxiosClient } from './axiosClient';
import { FIXER_URL } from '@env';

export const fixerClient = createAxiosClient(FIXER_URL);
