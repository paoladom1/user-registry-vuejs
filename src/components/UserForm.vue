<template>
    <div class="container">
        <div class="profile-img">
            <div class="dashed">
                <Profile class="img" />
            </div>
        </div>
        <form class="form">
            <input class="input" type="text" placeholder="Nombre:" />
            <input class="input" type="text" placeholder="Apellido:" />
        </form>
        <button class="save-user">
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
};
</script>

<style scoped>
.container {
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 36px;
}

.profile-img {
    display: flex;
    margin-bottom: 22px;
    width: 120px;
    height: 102px;
    background-color: #f1f4f7;
    border-radius: 10px;
}

.dashed {
    display: flex;
    width: 108px;
    height: 90px;
    border-radius: 10px;
    margin: auto 5px;
    box-sizing: border-box;
    justify-content: center;
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
</style>