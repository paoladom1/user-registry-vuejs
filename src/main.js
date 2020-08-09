import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        users: [],
        showForm: false,
        showProfile: false
    },
    mutations: {
        addUser({ users }, { user }) {
            users.push(user);
        },
        toggleForm({ showForm }) {
            this.state.showForm = !showForm;
        },
        toggleProfile({ showProfile }) {
            this.state.showProfile = !showProfile;
        }
    }
});

new Vue({
    store,
    render: h => h(App)
}).$mount("#app");

/*store.commit("addUser", { newUser: { firstname: 'Paola Carolina', lastname: 'Dominguez Diaz' } });*/
