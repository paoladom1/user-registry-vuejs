<template>
    <div id="app">
        <h2 class="title">Prueba IT</h2>
        <Layout>
            <UserProfile />
            <UserList />
        </Layout>
    </div>
</template>

<script>
import Layout from "./components/Layout";
import UserProfile from "./components/UserProfile";
import UserList from "./components/UserList";

export default {
    name: "App",
    components: {
        Layout,
        UserProfile,
        UserList,
    },
};
</script>

<style>
h2.title {
    width: 200px;
    margin: 20px auto;
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
