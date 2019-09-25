import Vue from "vue";
import Vuex from "vuex";
import login from "./modules/login";
import items from "./modules/Items";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    items
  }
});
