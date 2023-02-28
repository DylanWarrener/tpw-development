<template>
    <div class='nav__logo'>
        <template v-if='linkHome && altText'>
            <router-link class='logo__a' :to='linkHome'>
                <img 
                    class='logo__a-img'
                    src='@/assets/static/svg/logo.svg' 
                    :alt='altText' 
                />
            </router-link>
        </template>
    </div>
</template>

<script lang='ts'>
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'logo-component',
        props: {
            linkHome: { type: String, required: true },
            altText: { type: String, required: false }
        }
    })
</script>

<style scoped lang='scss'>
    @use '@/styles/defaults';
    @use '@/styles/all/spacing';
    @use '@/styles/all/backgrounds';
    @use '@/styles/all/borders';

    .nav__logo {
        //border: 2px solid green;
        display: flex;
        justify-content: center;
        height: spacing.$height_viewport_nav;
        border-bottom: borders.$border-header-bottom;
        z-index: 1;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            background-color: backgrounds.$background-color-dark-nav-links-side;
            width: spacing.$width_pixel_nav_side;
            height: spacing.$height_percentage_half_parent;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
        }

        .logo__a {
            //border: 2px solid yellow;
            height: spacing.$height_percentage_fill_parent;
            width: 100%;

            .logo__a-img {
                //border: 2px solid black;
                height: spacing.$height_percentage_fill_parent;
                width: 100%;
            }
        }
    }

    @media only screen and (max-width: defaults.$medium) {
        .nav__logo {
            grid-column: 1 / 2;
        }
    }
</style>