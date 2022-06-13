import {atom, selector, selectorFamily} from "recoil";

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