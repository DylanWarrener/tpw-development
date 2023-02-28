<template>  
    <div id='reviews'>
        <section-container-component
            :heading='reviewsHeading'
            :subheading='reviewsSubheading'
        >
            <template #content>
                <div id='reviews-content'>
                    Reviews - Content not added yet
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
        name: 'process-of-elimination-component',
        components: {
            'section-container-component': ContainerSectionContent
        },
        computed: {
            reviewsHeading(): string { return this.storeCommon.getTextualData.section.reviews.heading },
            reviewsSubheading(): string { return this.storeCommon.getTextualData.section.reviews.subheading },
        },
        setup() {
            const storeCommon = parentStore()
            return { storeCommon }
        }
    })
</script>

<style lang='scss'>
    @use '@/styles/all/colors';
    
    #reviews {
        background-color: colors.$theme-secondary-hex;

        #reviews-content {
            
        }
    }
</style>