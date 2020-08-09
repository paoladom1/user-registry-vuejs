<template>
    <div id="app">
        <h2 class="title">Prueba IT</h2>
        <Layout>
            <div class="wrapper">
                <UserProfile v-if="$store.state.showProfile" />
                <UserList />
                <div class="div-line" v-if="$store.state.showForm" />
                <UserForm v-if="$store.state.showForm" />
            </div>
        </Layout>
    </div>
</template>

<script>
import Layout from "./components/Layout";
import UserProfile from "./components/UserProfile";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

export default {
    name: "App",
    components: {
        Layout,
        UserProfile,
        UserList,
        UserForm,
    },
};
</script>

<style>
.wrapper {
    height: 720px;
    display: flex;
    align-self: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
}

h2.title {
    width: 200px;
    margin: 20px auto;
}

.div-line {
    align-self: center;
    width: 554px;
    height: 2px;
    background-color: #d3ecff;
    margin-top: 8px;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
