import { createSelectorHooks } from "auto-zustand-selectors-hook";
import { produce } from "immer";
import { create } from "zustand";

export interface CustomerInfo {
  id: string;
  name: string;
  dealer: string;
  address: string;
  mobile: string;
  email: string;
  type: string;
  photo: string;
}

type AuthStoreType = {
  user: CustomerInfo | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signin: (user: CustomerInfo, token?: string) => void;
  signout: () => void;
  stopLoading: () => void;
  token?: string;
};

const useAuthStoreBase = create<AuthStoreType>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  signin: (user, token) => {
    set(
      produce<AuthStoreType>((state) => {
        state.isAuthenticated = true;
        state.user = user;
        if (token) state.token = token;
      })
    );
  },
  signout: () => {
    localStorage.removeItem("token");
    set(
      produce<AuthStoreType>((state) => {
        state.isAuthenticated = false;
        state.user = null;
      })
    );
  },
  stopLoading: () => {
    set(
      produce<AuthStoreType>((state) => {
        state.isLoading = false;
      })
    );
  },
}));

const useAuthStore = createSelectorHooks(useAuthStoreBase);

export default useAuthStore;
