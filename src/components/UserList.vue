<template>
    <div class="container">
        <h3 class="title">Usuarios</h3>
        <div class="user-box">
            <ul class="user-list">
                <EmptyList class="empty-list-img" />
            </ul>
            <button class="add-user">
                <div class="dashed-with-gradient">
                    <AddUser class="add-user-img" />
                </div>
            </button>
        </div>
    </div>
</template>

<script>
import AddUser from "../assets/iconos_ilustraciones/icono-agregar-usuario.svg";
import EmptyList from "../assets/iconos_ilustraciones/ilustracion-usuarios-vacios.svg";

export default {
    name: "UserList",
    components: {
        AddUser,
        EmptyList,
    },
};
</script>

<style scoped>
.container {
    flex-direction: column;
    justify-content: center;
}

.title {
    width: 100%;
    margin: 30px auto;
}

.user-box {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.user-list {
    display: flex;
    width: 431px;
    height: 86px;
    border-radius: 10px;
    margin: 0;
    background-color: #f1f4f7;
    box-shadow: 8px 8px 10px rgba(159, 166, 173, 0.15);
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
    margin: auto;
}
</style>