import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";

interface Store {
    activityStore : ActivityStore
}

export const store: Store = {
    activityStore: new ActivityStore()
}

export const StoreContext = createContext(store); //racttan import edilmeli birden fazla referans çıkabilir

export function useStore(){
    return useContext(StoreContext);
}