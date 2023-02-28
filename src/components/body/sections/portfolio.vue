<template>  
    <div id='portfolio'>
        <section-container-component
            :heading='portfolioHeading'
            :subheading='portfolioSubheading'
        >
            <template #content>
                <div id='portfolio__content'>
                    Portfolio - Content not added yet
                </div>
            </template>
        </section-container-component>
    </div>
</template>
  
<script lang='ts'>
    import { defineComponent } from 'vue'

    // Stores
    import parentStore from '@/store'

    // Components 
    import ContainerSectionContent from '@/components/containers/section/container-section-content.vue'

    export default defineComponent({
        name: 'portfolio-component',
        components: {
            'section-container-component': ContainerSectionContent
        },
        computed: {
            portfolioHeading(): string { return this.storeCommon.getTextualData.section.portfolio.heading },
            portfolioSubheading(): string { return this.storeCommon.getTextualData.section.portfolio.subheading },
        },
        setup() {
            const storeCommon = parentStore()
            return { storeCommon }
        }
    })
</script>

<style lang='scss'>
    @use '@/styles/all/colors';

    #portfolio {
        background-color: colors.$tint-secondary-20-hex;

        #portfolio__content {
            
        }
    }
</style>