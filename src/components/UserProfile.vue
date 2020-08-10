<template>
    <div class="container">
        <div class="user-image">
            <div class="dashed">
                <Edit class="edit-btn" @click="setEditing" />
                <img v-if="image" class="img" :src="image" />
                <EmptyProfile v-else class="default-img" />
            </div>
        </div>
        <div class="user-info">
            <label class="text">Nombre: {{ firstname }}</label>
            <label class="text">Apellido: {{ lastname }}</label>
        </div>
    </div>
</template>

<script>

import Edit from "../assets/iconos_ilustraciones/icono-editar.svg";
import EmptyProfile from "../assets/iconos_ilustraciones/icono-perfil.svg";
import { mapMutations } from "vuex"; 

export default {
    name: "UserProfile",
    components: {
        Edit,
        EmptyProfile
    },
    methods: mapMutations(["setEditing"]),
    computed: {
        firstname() {
            const { users, currentUser } = this.$store.state;
            const { firstname } = users[currentUser];

            return firstname;
        },
        lastname() {
            const { users, currentUser } = this.$store.state;
            const { lastname } = users[currentUser];

            return lastname;
        },
        image() {
            const { users, currentUser } = this.$store.state;
            const { image } = users[currentUser];

            return image;
        }
    }
};
</script>

<style scoped>
.container {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 30px auto 0 0;
}

.user-image {
    display: flex;
    width: 191px;
    height: 167px;
    border-radius: 10px;
    align-self: center;
    background-color: #f1f4f7;
    box-sizing: border-box;
}

.dashed {
    display: flex;
    position: relative;
    width: 172px;
    height: 149px;
    border-radius: 10px;
    border: dashed 0.5px #c2c0c1;
    margin: auto;
    box-sizing: border-box;
    justify-content: center;
}

.img,
.default-img {
    border-radius: 10px;
    align-self: center;
}

.img {
    width: 172px;
    height: 149px;
}

.default-img {
    width: auto;
    height: auto;
    max-width: 172px;
    max-height: 149px;
}

.edit-btn {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
}

.user-info {
    display: flex;
    margin-top: 14px;
    flex-direction: column;
    justify-content: center;
}

.text {
    font-size: 1rem;
    font-weight: bold;
    margin: 14px auto;
    color: black;
}
</style>
