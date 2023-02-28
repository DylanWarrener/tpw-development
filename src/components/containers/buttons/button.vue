<template>
    <button class="btn">
        {{ btnText }}
        <slot name="icon">
            <span class="btn_icon material-icons"></span>
        </slot>
    </button>
</template>

<script lang='ts'>
    import { defineComponent } from 'vue'

    // Stores
    import parentStore, { childStores } from '@/store'

    export default defineComponent({
        name: 'container-button-component',
        props: {
            btnText: { Type: String, required: false }
        },
        setup() {
            const storeCommon = parentStore()
            const storeHeader = childStores.useHeaderStore()
            return { storeCommon, storeHeader }
        },
    })
</script>

<style scoped lang='scss'>
    @use '/src/styles/all/colors';
    @use '/src/styles/all/borders';
    @use '/src/styles/all/spacing';
    @use '/src/styles/all/transitions';
    @use '/src/styles/all/transform';

    .btn {
        //border: 2px solid red;
        border: 2px solid colors.$theme_secondary_rgba;
        background-color: colors.$theme_secondary_rgba;
        border-radius: borders.$radius_btn; 
        display: flex;
        align-items: center;    
        justify-content: center;
        width: 150px;
        height: 50px;
        transition: transitions.$border_btn;

        &:hover {
            border: 2px solid white;

            .btn_icon {
                transform: transform.$rotate_btn_icon;
            }
        }
        
        .btn_icon {
            transition: transitions.$transform_btn_icons;
        }
    }
</style>

/*
.btn {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 80px;
    height: 20px;
    background-color: colors.$tint-accent-20-rgb;
    border-radius: 0 0 25px 25px;
    z-index: -1;
    top: 12vh;
    left: 85%;
    position: absolute;
    border: transparent;
    transition: all 0.3s ease-in-out;
    transform: translateY(0%);

    &:hover {
        border-bottom: 1px solid white;
    }

    .btn__icon {
        //border: 2px solid red;
        transition: all 0.3s ease-in-out;
    }
}
*/