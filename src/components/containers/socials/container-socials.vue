<template>  
    <div id="socials">
        <slot name="title"></slot>
        <ul id="socials__ul">
            <li class="socials__li">
                <p class="socials__p" v-if="socialsType === 'text'">
                    <slot name="socials-text"></slot>
                </p>
                <span class="socials__span" v-else>
                    <slot name="socials-icon"></slot>
                </span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'socials-container-component',
        props: {
            socialsType: { type: String, required: true }
        }
    })
</script>

<style scoped lang="scss">
    #socials {
        border: 2px solid red; 

        #socials__ul {
            border: 2px solid blue; 

            .socials__li {
                border: 2px solid black;

                .socials__p {
                    border: 2px solid red; 
                }

                .socials__span {
                    border: 2px solid green; 
                }
            }
        }
    }
</style>