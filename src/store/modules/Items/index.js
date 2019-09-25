// import { login, getUserInfo, logout } from "../../../api/login";
// import cookie from "../../../utils/jsCookie";
import { Message } from "element-ui";
// import {
//   SET_TOKEN,
//   SET_AUTHORITY,
//   SET_ID,
//   SET_NAME,
//   SET_AVATAR,
//   SET_TEL,
//   SET_MAIL,
//   SET_POWER
// } from "./mutations_type";

const itemBox = {
  state: {
    dataList: [
      {
        name: "去电玩城1",
        createTime: "2019-10-10"
      },
      {
        name: "去电玩城2",
        createTime: "2019-10-10"
      }
    ],
    finishList: [
      {
        name: "去电玩城3",
        createTime: "2019-10-10",
        finishTime: "2019-10-12"
      },
      {
        name: "去电玩城4",
        createTime: "2019-10-10",
        finishTime: "2019-10-12"
      }
    ],
    recycleList: [
      {
        name: "去电玩城5",
        createTime: "2019-10-10",
        delTime: "2019-10-12"
      },
      {
        name: "去电玩城6",
        createTime: "2019-10-10",
        delTime: "2019-10-12"
      }
    ]
  },
  actions: {
    getData({ commit }, user) {
      const data = [];
      const fin = [];
      const recy = [];
      if (user) {
        commit("set_data", data);
        commit("set_finish", fin);
        commit("set_recycle", recy);
      } else {
        Message({
          message: "请先登录！",
          center: true
        });
      }
    }
  },
  mutations: {
    set_data(state, data) {
      state.dataList = data;
    },
    set_finish(state, fin) {
      state.finishList = fin;
    },
    set_recycle(state, recy) {
      state.recycleList = recy;
    }
  },
  getters: {
    getDataList(state) {
      return state.dataList;
    },
    getFinishList(state) {
      return state.finishList;
    },
    getRecycleList(state) {
      return state.recycleList;
    }
  }
};

export default itemBox;
