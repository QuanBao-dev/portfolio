import createStore from "../util/createStore";

export const globalStore = createStore({
  isNavBarActive: false,
  page:1,
  prevPage:1,
  isActive:false,
  trigger:false,
  orderPages:["page-1","page-2","page-3"]
});
