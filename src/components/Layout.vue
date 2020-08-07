<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Layout",
};
</script>

<style scoped>
.container {
    display: flex;
    width: 720px;
    height: 720px;
    margin: 100px auto;
    background-color: #d2d6e2;
}
</style>