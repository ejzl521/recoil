import {atom, selector, selectorFamily} from "recoil";
import { recoilPersist } from 'recoil-persist';

const {persistAtom} = recoilPersist();
export const tokenState = atom({
  key: 'tokenState',
  default: '',
  effects_UNSTABLE: [persistAtom]
})

export const countState = atom({
  key: "countState",
  default: 1
});

export const addCountState = selectorFamily(
  {
    key: "addCountState",
    get: (num) =>
      ({get}) => {
        return get(countState) + Number(num);
      }
  }
)