<template>
    <div>
        <SlotCom>
            I am RC.
            <template slot="header">
                <h1>Here might be a page title</h1>
            </template>
            <BoxCom></BoxCom>
            {{ user.age }}
        </SlotCom>
        <!-- <SlotCom>
            <template v-slot:header>
                <h1>Here might be a page title</h1>
            </template>
            <template v-slot:default>
                <p>A paragraph for the main content.</p>
                <p>And another one.</p>
            </template>
        </SlotCom> -->
        <!-- <SlotCom>
            <template v-slot="{ user }">
                {{user.age}}
            </template>
        </SlotCom> -->
        <!-- <SlotCom>
            <template v-slot:todo="{ todo }">
                {{ todo.text }}
            </template>
        </SlotCom> -->
    </div>

</template>
<script>
    import SlotCom from '../components/Slot'
    import BoxCom from '../components/Box1'

    export default {
        data() {
            return {
                user: {
                    age: 26
                },
                todo: {
                    text: 'basketball'
                }
            }
        },
        components: {
            SlotCom,
            BoxCom
        }
    }
</script>