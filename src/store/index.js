import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user_data:{},
    course_data: {},
    appointment_calendar:[]
  },
  actions: {},
  mutations: {
    //用户信息数据传递
    USER_DATA(state,payload){
      state.user_data = payload
    },
    }
})

export default store
