import { createContext } from 'react'
import  {MobxStore}  from "../stores/mobxStore";

export const stores = {
    storeTest: createContext(new MobxStore())
}

