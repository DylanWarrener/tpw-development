<template>
    <div id='nav__auth'>
        <button id='auth__btn-menu' v-if='isSmallScreenSize' @click='updateBurgerMenuState'>
            <span class='material-icons'>
                {{ iconMenu }}
            </span>
        </button>
        <div id='auth__btn-container' v-else>
            <button id='auth__btn-profile'>
                <span class='material-icons'>
                    {{ iconPerson }}
                </span>
            </button>
            <button id='auth__btn-basket'>
                <span class='material-icons'>
                    {{ iconShoppingBasket }}
                </span>
            </button>
        </div>
    </div>
</template>

<script lang='ts'>
    import { defineComponent } from 'vue'

    // Stores
    import parentStore, { childStores } from '@/store'

    export default defineComponent({
        name: 'nav-authentication-component',
        computed: {
            isSmallScreenSize(): boolean { return this.storeHeader.getIsSmallScreenSize },
            isBurgerMenuActive(): boolean { return this.storeHeader.getIsBurgerMenuActive },
            iconMenu(): string { return this.storeCommon.getTextualData.navigation.icons.menu },
            iconPerson(): string { return this.storeCommon.getTextualData.navigation.icons.person },
            iconShoppingBasket(): string { return this.storeCommon.getTextualData.navigation.icons.shoppingBasket }
        },
        methods: {
            updateBurgerMenuState(): void {
                this.$emit('updateBurgerMenuState', !this.isBurgerMenuActive)
            }
        },
        setup() {
            const storeCommon = parentStore()
            const storeHeader = childStores.useHeaderStore()
            return { storeCommon, storeHeader }
        }
    })
</script>

<style scoped lang='scss'>
    @use '@/styles/all/spacing';
    @use '@/styles/all/transitions';
    @use '@/styles/all/colors';
    @use '@/styles/all/borders';

    #nav__auth {
        //border: 2px solid blue;
        //background: #ffcb00;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: spacing.$padding_pixel_global;
        width: spacing.$width_percentage_fill_parent;
        border-bottom: borders.$border-header-bottom;
        z-index: 1;

        #auth__btn-menu {
            //border: 2px solid red;
            display: flex;
            border: none;
        }

        #auth__btn-container {
            //border: 2px solid green;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: spacing.$width_percentage_fill_parent;

            #auth__btn-profile {
                //border: 2px solid orange;
                border: none;
            }

            #auth__btn-basket {
                //border: 2px solid blue;
                border: none;
            }
        }

        span {
            //border: 2px solid purple;
            display: flex;
            align-items: center;
            justify-content: center;
            width: spacing.$width_pixel_icon;
            height: spacing.$height_pixel_icon;
            transition: all 0.3s ease-in-out;
        }
    }
</style>