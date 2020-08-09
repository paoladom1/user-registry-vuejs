<template>
    <div class="container">
        <div class="user-image">
            <div class="dashed">
                <Edit class="edit-btn" />
                <img class="img" src="../assets/fotos/1.jpg" />
            </div>
        </div>
        <div class="user-info">
            <label class="text">Nombre: </label>
            <label class="text">Apellido: </label>
        </div>
    </div>
</template>

<script>
import Edit from "../assets/iconos_ilustraciones/icono-editar.svg";

export default {
    name: "UserProfile",
    components: {
        Edit,
    },
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
    position: relative;
    width: 172px;
    height: 149px;
    border-radius: 10px;
    border: dashed 0.5px #c2c0c1;
    margin: auto;
    box-sizing: border-box;
    align-self: center;
}

.img {
    width: 172px;
    height: 149px;
    border-radius: 10px;
}

.edit-btn {
    position: absolute;
    z-index: 1;
    top: 0px;
    right: 0px;
}

.user-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.text {
    font-size: 1rem;
    font-weight: bold;
    margin: 30px;
    color: black;
}
</style>