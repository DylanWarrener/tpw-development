<template>
    <div class='toggle__theme' v-if="!isSmallScreenSize">
        <label class='switch'>
            <input class='theme__input' type='checkbox' v-model='isDarkThemeActive'/>
            <div class='toggle'>
                <span class='material-symbols-outlined slider'>
                    {{ isDarkThemeActive ? 'dark_mode' : 'light_mode' }}
                </span>
            </div>
        </label>
    </div>
</template>

<script lang='ts'>
    import { defineComponent } from 'vue'

    // Stores
    import parentStore, { childStores } from '@/store'

    export default defineComponent({
        name: 'nav-menu-header-component',
        props: {
            isSmallScreenSize: { Type: Boolean, required: true }
        },
        data: () => ({
            isDarkThemeActive: false
        }),
        setup() {
            const storeCommon = parentStore()
            const storeHeader = childStores.useHeaderStore()
            return { 
                storeCommon, storeHeader
            }
        }
    })
</script>

<style scoped lang='scss'>
    @use '@/styles/all/backgrounds';
    @use '@/styles/all/borders';
    @use '@/styles/all/spacing';
    @use '@/styles/all/transitions';
    @use '@/styles/all/colors';

    .toggle__theme {
        //border: 2px solid green;
        border-bottom: borders.$border-header-bottom;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;

        &::after {
            content: '';
            position: absolute;
            display: block;
            background: backgrounds.$background-color-dark-nav-links-side;
            top: 50%;
            right: 0;
            width: spacing.$width_pixel_nav_side;
            height: spacing.$height_percentage_half_parent;
            transform: translateY(-50%);
        }

        .switch {
            //border: 2px solid red;
            position: relative;
            display: flex;
            align-items: center;
            width: spacing.$width_pixel_toggle_switch;
            height: spacing.$height_pixel_toggle_switch;

            .theme__input {
                position: absolute;
                opacity: 0;
                width: spacing.$width_percentage_fill_parent;
                height: spacing.$height_percentage_fill_parent;

                &:checked + .toggle {
                    background-color: backgrounds.$background-color-light-toggle-switch;
                }

                &:checked + .toggle > .slider {
                    transform: translateX(100%);
                }
            }

            .toggle {
                display: flex;
                justify-content: flex-start;
                outline: borders.$border-dark-toggle-switch;
                z-index: 1;
                position: absolute;
                cursor: pointer;
                background-color: backgrounds.$background-color-dark-toggle-switch;
                border-radius: borders.$radius-btn;
                width: spacing.$width_percentage_fill_parent;
                height: spacing.$height_percentage_fill_parent;
                transition: transitions.$bgcolor-toggle-switch;

                .slider {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: inherit;
                    position: absolute;
                    content: '';
                    color: black;
                    width: 50%;
                    height: spacing.$height_percentage_fill_parent;
                    background-color: white;
                    border-radius: borders.$radius-toggle-switch;
                    transform: translateX(0);
                    transition: transitions.$transform-toggle-slider;
                }
            }
        }
    }
</style>