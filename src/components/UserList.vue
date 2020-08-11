<template>
    <div class="container">
        <h3 class="title">Usuarios</h3>
        <div class="user-box" @mouseover="hover = true" @mouseleave="hover = false">
            <div class="users-wrapper">
                <EmptyList v-if="$store.state.users.length === 0" class="empty-list-img" />
                <ul id="grid" v-else class="user-list">
                    <li
                        class="list-element"
                        v-for="(user, index) in $store.state.users"
                        v-bind:key="index"
                        :style="
                            index >= 19 && {
                                gridRow:
                                    index % 2 === 0
                                        ? `${Math.floor(index / 20) * 2 +
                                              1} / ${Math.floor(index / 20) *
                                              2 +
                                              2}`
                                        : `${Math.floor(index / 20) * 2 +
                                              2} / ${Math.floor(index / 20) *
                                              2 +
                                              3}`,
                                marginTop: '-12px'
                            }
                        "
                        @click="onItemClick(index)"
                    >
                        <Hexagon class="hexagon"></Hexagon>
                        <img v-if="user.image" :src="user.image" class="hexagon-img" />
                        <EmptyImage v-else class="hexagon-default-img" />
                    </li>
                </ul>
            </div>
            <transition name="slide-fade">
                <button class="add-user" v-if="hover" @click="addUser">
                    <div class="dashed-with-gradient">
                        <AddUser class="add-user-img" />
                    </div>
                </button>
            </transition>
        </div>
    </div>
</template>

<script>
import AddUser from "../assets/iconos_ilustraciones/icono-agregar-usuario.svg";
import EmptyImage from "../assets/iconos_ilustraciones/icono-usuario-en-hexagono.svg";
import EmptyList from "../assets/iconos_ilustraciones/ilustracion-usuarios-vacios.svg";
import Hexagon from "../assets/iconos_ilustraciones/icono-hexagono.svg";

export default {
    name: "UserList",
    components: {
        AddUser,
        EmptyImage,
        EmptyList,
        Hexagon,
    },
    data() {
        return {
            hover: false,
        };
    },
    methods: {
        addUser() {
            const { users, showForm } = this.$store.state;
            const cant = users.length;

            if (!showForm) {
                this.$store.commit("setCurrentUser", cant);
                this.$store.commit("addUser");
                this.$store.commit("setEditing")
            }
        },
        onItemClick(index) {
            this.$store.commit("setCurrentUser", index);
            this.$store.commit("showProfile");
        },
    },
};
</script>

<style scoped>
.container {
    height: auto;
    margin: 0 auto 20px;
    justify-content: center;
    margin-top: 36px;
}

.title {
    width: 100%;
    margin: 0 auto 30px;
    color: black;
}

.user-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.users-wrapper {
    width: 431px;
    min-height: 86px;
    max-height: auto;
    border-radius: 10px;
    margin: 0;
    padding: 0;
    background-color: #f1f4f7;
    box-shadow: 8px 8px 10px rgba(159, 166, 173, 0.15);
    box-sizing: border-box;
}

.add-user {
    display: inline-block;
    padding: 0;
    margin-left: 10px;
    width: 86px;
    height: 86px;
    border-radius: 10px;
    border: 0;
    background-color: #f1f4f7;
    box-shadow: 8px 8px 10px rgba(159, 166, 173, 0.15);
    box-sizing: border-box;
}

.add-user:active {
    width: 85px;
    height: 85px;
    border: 0;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.add-user:focus {
    outline: none;
}

.dashed-with-gradient {
    display: flex;
    width: 76px;
    height: 76px;
    border-radius: 10px;
    border: dashed 0.5px #c2c0c1;
    margin: auto;
}

.add-user-img {
    margin: auto;
    align-self: center;
}

.empty-list-img {
    width: 99.69px;
    height: 78px;
    margin: 4px;
}

.user-list {
    display: grid;
    grid-template-columns: repeat(10, 39px);
    list-style-type: none;
    padding: 0;
    height: auto;
    width: 100%;
    margin: 10px;
}

.list-element {
    position: relative;
    width: 45px;
    height: auto;
    margin: 0;
    display: flex;
}

.user-list .list-element:nth-child(odd) {
    grid-row-start: auto;
    grid-row-end: auto;
    margin-left: 0;
    margin-top: 0;
}
.user-list .list-element:nth-child(even) {
    grid-row-start: even;
    grid-row-end: even;
    margin-left: 19px;
    margin-top: -12px;
}

.hexagon {
    width: 45px;
    height: 45px;
}

.hexagon-default-img,
.hexagon-img {
    position: absolute;
    width: 36px;
    height: 41px;
    margin: 2.1px 2px 2px 4.6px;
}

.hexagon-default-img {
    position: absolute;
    left: 7px;
    top: 3px;
    height: 32px;
    width: 21px;
}

.hexagon-img {
    clip-path: polygon(0 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0, 0 25%);
}

.slide-fade-enter-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-active {
    transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
</style>
