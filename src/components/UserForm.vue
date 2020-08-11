<template>
    <div class="container">
        <div class="profile-img">
            <div class="drop" @dragover.prevent @drop="onDrop">
                <Profile class="img" v-if="!image" />

                <div v-else v-bind:class="{ image: true }">
                    <img :src="image" alt class="image" />
                    <button class="btn" @click="removeFile">X</button>
                </div>
            </div>
        </div>
        <form class="form">
            <input v-model="firstname" required class="input" type="text" placeholder="Nombre:" />
            <input v-model="lastname" required class="input" type="text" placeholder="Apellido:" />
        </form>
        <button
            @click="saveUser({ image, firstname, lastname })"
            class="save-user"
            :disabled="disableForm()"
        >
            <Save class="save-user-img" />
        </button>
    </div>
</template>

<script>
import Profile from "../assets/iconos_ilustraciones/icono-perfil.svg";
import Save from "../assets/iconos_ilustraciones/icono-save.svg";

export default {
    name: "UserForm",
    components: {
        Profile,
        Save,
    },
    methods: {
        onDrop: function (e) {
            e.stopPropagation();
            e.preventDefault();
            var files = e.dataTransfer.files;
            this.createFile(files[0]);
        },
        createFile(file) {
            if (!file.type.match("image.*")) {
                alert("Select an image");
                return;
            }
            var reader = new FileReader();
            var vm = this;

            reader.onload = function (e) {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        removeFile() {
            this.image = "";
        },
        disableForm() {
            return this.firstname.length === 0 || this.lastname.length === 0;
        },
        saveUser(user) {
            this.$store.commit("updateUser", user);
            this.$store.commit("hideForm");
            this.$store.commit("hideProfile");
        },
    },
    computed: {
        firstname: {
            get() {
                return this.$store.state.userForm.firstname;
            },
            set(v) {
                this.$store.commit("updateFirstname", v);
            },
        },
        lastname: {
            get() {
                return this.$store.state.userForm.lastname;
            },
            set(v) {
                this.$store.commit("updateLastname", v);
            },
        },
        image: {
            get() {
                return this.$store.state.userForm.image;
            },
            set(v) {
                this.$store.commit("updateImage", v);
            },
        },
    },
};
</script>

<style scoped>
.container {
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    margin: 36px 0 0 0;
}

.profile-img {
    display: flex;
    margin-bottom: 22px;
    width: 120px;
    height: 102px;
    background-color: #f1f4f7;
    border-radius: 10px;
}

.drop,
.image {
    position: relative;
    display: flex;
    width: 108px;
    height: 90px;
    border-radius: 10px;
    margin: auto 5px;
    box-sizing: border-box;
    justify-content: center;
}

.drop {
    border: dashed 0.5px #c2c0c1;
}

.img {
    width: 50px;
    height: 77.62px;
    align-self: center;
}

.form {
    display: flex;
    flex-direction: column;
}

.input {
    width: 300px;
    height: 40px;
    font-size: 1rem;
    color: black;
    font-weight: bold;
    border-radius: 10px;
    margin-bottom: 22px;
    margin-left: 6px;
    padding: 8px;
    box-sizing: border-box;
    border: 1px black solid;
}

.input::placeholder {
    color: black;
}

.save-user {
    display: inline-block;
    padding: 0;
    margin: 0 0 22px 42px;
    width: 86px;
    height: 86px;
    border-radius: 10px;
    border: 0;
    background-color: #f1f4f7;
    box-shadow: 8px 8px 10px rgba(159, 166, 173, 0.15);
    box-sizing: border-box;
}

.save-user:active {
    width: 85px;
    height: 85px;
    border: 0;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.save-user:focus {
    outline: none;
}

.btn {
    z-index: 1;
    position: absolute;
    border: none;
    background: none;
    right: 0px;
    color: #c2c0c1;
}

.align-center {
    text-align: center;
}

.hidden {
    display: none !important;
}

.hidden.image {
    display: inline-block !important;
}
</style>
