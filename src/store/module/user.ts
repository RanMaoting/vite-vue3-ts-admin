import { defineStore } from 'pinia';
import store from '/@/store';
import { userStoreType } from '../types';

export const useUserStore = defineStore({
    id: 'user-store',
    state: (): userStoreType => ({
        username: undefined,
        password: undefined,
        accessToken: undefined,
    }),
});

export const useUserstoreHook = () => useUserStore(store);
