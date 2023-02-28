<template>  
    <div id="footer-middle__menu">
        <div id="footer-middle__menu-nav">
            <container-nav></container-nav>
        </div>
        <div id="footer-middle__menu-socials-text">
            <socials-container socials-type="text"></socials-container>
        </div>
        <div id="footer-middle__menu-contact-details">
            <contact-details-container></contact-details-container>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    // Components
    import ContainerNav from '@/components/containers/navigation/container-nav.vue'
    import SocialsContainer from '@/components/containers/socials/container-socials.vue'
    import ContactDetailsContainer from '@/components/containers/contact/container-contact-details.vue'

    export default defineComponent({
        name: 'nav-footer-menu-component',
        components: {
            'container-nav': ContainerNav,
            'socials-container': SocialsContainer,
            'contact-details-container': ContactDetailsContainer
        }
    })
</script>

<style scoped lang="scss">
    #footer-middle__menu {

        #footer-middle__menu-nav {

        }

        #footer-middle__menu-socials-text {

        }

        #footer-middle__menu-contact-details { 
            
        }
    }
</style>