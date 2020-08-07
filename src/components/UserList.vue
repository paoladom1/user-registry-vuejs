<template>
    <div class="container">
        <h3 class="title">Usuarios</h3>
        <div class="user-box">
            <ul class="user-list"></ul>
            <button class="add-user">+</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserList",
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
    width: 431px;
    height: 86px;
    border-radius: 10px;
    margin: 0;
    background-color: #f1f4f7;
}

.add-user {
    display: inline-block;
    margin-left: 10px;
    width: 86px;
    height: 86px;
    border-radius: 10px;
    border: 0;
    background-color: #f1f4f7;
}
</style>