import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        users: Array(3).fill({ firstname: "alejandro", lastname: "velasco" }),
        userForm: {
            firstname: "",
            lastname: "",
            image: ""
        },
        currentUser: -1,
        editing: false,
        showForm: false,
        showProfile: false
    },
    mutations: {
        addUser({ users }, user) {
            users.push(user);
            this.state.userForm = {
                firstname: "",
                lastname: "",
                image: ""
            };
        },
        updateUser({ users, currentUser }, user) {
            this.state.users = users.map((item, i) =>
                currentUser === i ? { ...user } : item
            );

            this.state.userForm = {
                firstname: "",
                lastname: "",
                image: ""
            };

            this.state.editing = false;
        },
        cleanupForm() {
            this.state.userForm = {
                firstname: "",
                lastname: "",
                image: ""
            };
        },
        setEditing({ users, currentUser }) {
            const { firstname, lastname, image } = users[currentUser];

            this.state.editing = true;
            this.state.showForm = true;
            this.state.userForm = {
                firstname,
                lastname,
                image
            };
        },
        setCurrentUser(state, currentUser) {
            this.state.currentUser = currentUser;
        },
        showForm() {
            this.state.showForm = true;
        },
        hideForm() {
            this.state.showForm = false;
        },
        showProfile() {
            this.state.showProfile = true;
        },
        hideProfile() {
            this.state.showProfile = false;
        },
        updateFirstname(state, firstname) {
            this.state.userForm.firstname = firstname;
        },
        updateLastname(state, lastname) {
            this.state.userForm.lastname = lastname;
        },
        updateImage(state, image) {
            this.state.userForm.image = image;
        }
    }
});

new Vue({
    store,
    render: h => h(App)
}).$mount("#app");

/*store.commit("addUser", { newUser: { firstname: 'Paola Carolina', lastname: 'Dominguez Diaz' } });*/
