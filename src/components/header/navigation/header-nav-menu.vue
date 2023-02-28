<template>
    <nav id='header_nav' :style="navTransform">
        <container-logo-component 
            :link-home="logoLinkHome"
            :alt-text="logoAltText"
        />
        <container-nav-component 
            :links="navLinks"
            :text="navText"
            :orientation-and-status="navOrientationAndStatus"
            :is-small-screen-size="isSmallScreenSize"
        />
        <toggle-theme-component 
            :is-small-screen-size="isSmallScreenSize"
        />
        <auth-component 
            @update-burger-menu-state="updateBurgerMenuState"
        />
    </nav>
</template>

<script lang='ts'>
    import { defineComponent } from 'vue'

    // Components
    import Logo from '@/components/containers/logo/container-logo.vue'
    import ContainerNav from '@/components/containers/navigation/container-nav.vue'
    import ToggleTheme from '@/components/header/navigation/toggle-theme.vue'
    import Auth from '@/components/header/navigation/authentication.vue'

    // Stores
    import parentStore, { childStores } from '@/store'

    // Interfaces 
    import { INavigationPageTextualData } from '@/interfaces/common/interface-navigation'

    export default defineComponent({
        name: 'nav-menu-header-component',
        components: {
            'container-logo-component': Logo,
            'container-nav-component': ContainerNav,
            'toggle-theme-component': ToggleTheme,
            'auth-component': Auth
        },
        computed: {
            // For nav
            navTransform(): string { 
                if (this.storeHeader.getIsNavHidden)
                    return 'transform: translateY(-100%);'
                else 
                    return 'transform: translateY(0);'
            },

            // For Logo
            logoLinkHome(): string { return this.storeCommon.getTextualData.navigation.links.home },
            logoAltText(): string { return this.storeCommon.getTextualData.logo.text.alt.tpwLogo },
            
            // For Nav
            navLinks(): INavigationPageTextualData { return this.storeCommon.getTextualData.navigation.links },
            navText(): INavigationPageTextualData { return this.storeCommon.getTextualData.navigation.text },
            navOrientation(): string { return this.storeHeader.getNavOrientation },
            navStatus(): string { return this.storeHeader.getNavStatus },
            navOrientationAndStatus(): string { return this.navOrientation + " " + this.navStatus },
            isSmallScreenSize(): boolean { return this.storeHeader.getIsSmallScreenSize },
            
            // For Auth
            isBurgerMenuActive(): boolean { return this.storeHeader.getIsBurgerMenuActive },
        },
        methods: {
            updateBurgerMenuState(data: boolean): void {
                this.storeHeader.setIsBurgerMenuActive(data)
                this.updateNavStatus()
            },
            updateNavStatus(): void {
                this.isBurgerMenuActive ? this.storeHeader.setNavStatus('open') : this.storeHeader.setNavStatus('closed')
            },
            checkScrollPosition(): void {
                if (window.scrollY >= (window.innerHeight - 150)) 
                    this.storeHeader.setIsNavHidden(true)
            }
        },
        setup() {
            const storeCommon = parentStore()
            const storeHeader = childStores.useHeaderStore()
            return { storeCommon, storeHeader }
        },
        created() {
            window.addEventListener('scroll', this.checkScrollPosition)
        }
    })
</script>

<style scoped lang='scss'>
    @use '@/styles/defaults';
    @use '@/styles/all/backgrounds';
    @use '@/styles/all/borders';

    #header_nav {
        background-color: backgrounds.$background-color-dark-boxes;
        display: grid;
        grid-template-columns: 2fr 5fr 1fr 2fr;
        position: relative;
        transition: transform 0.3s ease-in-out;
    }

    @media only screen and (max-width: defaults.$medium) {
        #header_nav {
            grid-template-columns: 8fr 2fr;
        }
    }
</style>