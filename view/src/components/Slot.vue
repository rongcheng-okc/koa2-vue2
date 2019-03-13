<template>
    <div>
        <!-- <slot v-bind:user="user">{{user.age}}</slot> -->
        <slot></slot>
        <h3>--------------</h3>
        <slot name="header"></slot>
        <!-- <slot name="todo" v-bind:todo="todo">
            后备内容
            {{ todo.text }}
        </slot> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                age: 27
            }
        }
    },
}
</script>

