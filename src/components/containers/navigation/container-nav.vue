<template>
    <div class='nav' :class='orientationAndStatus'>
        <!--<div class='nav_profile' v-if='isSmallScreenSize'></div>-->
        <ul class='nav_ul'>
            <template v-if='links && text'>
                <li class='nav_ul-li'>
                    <router-link class='nav_li-a' :to='links.home'>
                        <span class="material-icons icon home"></span>
                        {{ text.home }}
                    </router-link>
                </li>
                <li class='nav_ul-li'>
                    <router-link class='nav_li-a' :to='links.kitchen'>
                        <span class="material-icons icon kitchen"></span>
                        {{ text.kitchen }}
                    </router-link>
                </li>
                <li class='nav_ul-li'>
                    <router-link class='nav_li-a' :to='links.bathroom'>
                        <span class="material-icons icon bathroom"></span>
                        {{ text.bathroom }}
                    </router-link>
                </li>
                <li class='nav_ul-li'>
                    <router-link class='nav_li-a' :to='links.extension'>
                        <span class="material-icons icon extension"></span>
                        {{ text.extension }}
                    </router-link>
                </li>
                <li class='nav_ul-li'>
                    <router-link class='nav_li-a' :to='links.refurbishment'>
                        <span class="material-icons icon refurbishment"></span>
                        {{ text.refurbishment }}
                    </router-link>
                </li>
                <li class='nav_ul-li'>
                    <router-link class='nav_li-a' :to='links.newbuild'>
                        <span class="material-icons icon newbuild"></span>
                        {{ text.newbuild }}
                    </router-link>
                </li>
                <li class='nav_ul-li'>
                    <router-link class='nav_li-a' :to='links.contact'>
                        <span class="material-icons icon contact"></span>
                        {{ text.contact }}
                    </router-link>
                </li>
                <li class='nav_ul-li'>
                    <router-link class='nav_li-a' :to='links.about'>
                        <span class="material-icons icon about"></span>
                        {{ text.about }}
                    </router-link>
                </li>
            </template>
        </ul>
    </div>
</template>

<script lang='ts'>
    import { defineComponent } from 'vue'

    // Interfaces
    import { INavigationPageTextualData } from '@/interfaces/common/interface-navigation'

    export default defineComponent({
        name: 'nav-container-component',
        props: {
            links: { type: Object as () => INavigationPageTextualData, required: true },
            text: { type: Object as () => INavigationPageTextualData, required: true },
            orientationAndStatus: { type: String, required: true },
            isSmallScreenSize: { type: Boolean, required: true }
        }
    })
</script>

<style scoped lang='scss'>
    @use '@/styles/defaults';
    @use '@/styles/all/transitions';
    @use '@/styles/all/backgrounds';
    @use '@/styles/all/spacing';
    @use '@/styles/all/borders';

    .nav {
        //border: 2px solid red;
        display: flex;
        transition: all 0.3s ease-in-out;
        border-bottom: borders.$border-header-bottom;

        &::after {
            content: '';
            display: block;
            background: backgrounds.$background-color-dark-nav-links-side;
            top: 50%;
            width: spacing.$width_pixel_nav_side;
            height: spacing.$height_percentage_half_parent;
            transform: translateY(50%);
        }

        .nav_profile {
            //border: 2px solid white;
        }

        .nav_ul {
            //border: 2px solid black;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            width: spacing.$width_percentage_fill_parent;
            padding: spacing.$padding_pixel_global;

            .nav_ul-li {
                //border: 2px solid green;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                gap: spacing.$gap_pixel_nav_horizontal_li;
                padding: spacing.$padding_pixel_nav_links;

                .nav_li-a {
                    //border: 1px solid blue;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    position: relative;

                    &.router-link-exact-active {
                        &::after {
                            width: spacing.$width_percentage_fill_parent;
                        }

                        .material-icons.home::before {
                            content: 'house';
                        }

                        .material-icons.kitchen::before {
                            content: 'restaurant';
                        }

                        .material-icons.bathroom::before {
                            content: 'shower';
                        }

                        .material-icons.extension::before {
                            content: 'expand';
                        }

                        .material-icons.refurbishment::before {
                            content: 'handyman';
                        }

                        .material-icons.newbuild::before {
                            content: 'add_home';
                        }

                        .material-icons.contact::before {
                            content: 'contact_mail';
                        }

                        .material-icons.about::before {
                            content: 'quiz';
                        }
                    }

                    &:hover {
                        &::after {
                            width: spacing.$width_percentage_fill_parent;
                        }

                        .material-icons.home::before {
                            content: 'house';
                        }

                        .material-icons.kitchen::before {
                            content: 'restaurant';
                        }

                        .material-icons.bathroom::before {
                            content: 'shower';
                        }

                        .material-icons.extension::before {
                            content: 'expand';
                        }

                        .material-icons.refurbishment::before {
                            content: 'handyman';
                        }

                        .material-icons.newbuild::before {
                            content: 'add_home';
                        }

                        .material-icons.contact::before {
                            content: 'contact_mail';
                        }

                        .material-icons.about::before {
                            content: 'quiz';
                        }
                    }

                    &::after {
                        content: ''; 
                        display: block;
                        position: absolute;
                        width: 0%;
                        left: 50%;
                        bottom: 1%;
                        transform: translateX(-50%);
                        background: backgrounds.$background-color-dark-nav-links-bottom;
                        height: spacing.$height_pixel_nav_bottom;
                        transition: all 0.3s ease-in-out;
                    }

                    span {
                        //border: 2px solid black;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .material-icons.icon::before {
                        width: 100%;
                        height: 100%;
                    }

                    .material-icons.home::before {
                        content: 'home';
                    }

                    .material-icons.kitchen::before {
                        content: 'food_bank';
                    }

                    .material-icons.bathroom::before {
                        content: 'bathroom';
                    }

                    .material-icons.extension::before {
                        content: 'unfold_more';
                    }

                    .material-icons.refurbishment::before {
                        content: 'construction';
                    }

                    .material-icons.newbuild::before {
                        content: 'cottage';
                    }

                    .material-icons.contact::before {
                        content: 'contact_page';
                    }

                    .material-icons.about::before {
                        content: 'help_center';
                    }
                }
            }
        }
    }

    @media only screen and (max-width: defaults.$medium) {
        .nav {
            //border: 2px solid white;
            //border: none;
            background-color: backgrounds.$background-color-dark-boxes;
            flex-direction: column;
            position: absolute;
            width: spacing.$width_percentage_fill_parent;

            .nav_ul {
                //border: 2px solid blue;
                flex-direction: column;
                gap: spacing.$gap_pixel_nav_vertical_ul;

                .nav_ul-li {
                    //border: 2px solid green;
                    width: 100%;
                    flex-direction: row;
                    justify-content: flex-start;

                    .nav_li-a {
                        //border: 1px solid blue;

                        &::after {
                        }

                        &:hover {
                            &::after {
                            }
                        }

                        &.router-link-exact-active {
                            &::after {
                            }
                        }
                    }
                }
            }
        }

        .open {
            top: 100%;
        }

        .closed {
            top: -500%;
        }
    }
</style>