import { createAxiosClient } from './axiosClient';
import { REACT_NATIVE_API_URL } from '@env';

export const userClient = createAxiosClient(REACT_NATIVE_API_URL);
