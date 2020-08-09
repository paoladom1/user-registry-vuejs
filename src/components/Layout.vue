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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 720px;
    height: 720px;
    margin: auto;
    background-color: #d2d6e2;
    box-sizing: border-box;
}
</style>