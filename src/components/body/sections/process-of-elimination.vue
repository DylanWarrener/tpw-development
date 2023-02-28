<template>  
    <div id='process__of__elimination'>
        <section-container-component
            :heading='processOfEliminationHeading'
            :subheading='processOfEliminationSubheading'
        >
            <template #content>
                <div id='process__of__elimination-content'>
                    Process of Elimination - Content not added yet
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
            processOfEliminationHeading(): string { return this.storeCommon.getTextualData.section.processOfElimination.heading },
            processOfEliminationSubheading(): string { return this.storeCommon.getTextualData.section.processOfElimination.subheading },
        },
        setup() {
            const storeCommon = parentStore()
            return { storeCommon }
        }
    })
</script>

<style lang='scss'>
    @use '@/styles/all/colors';

    #process__of__elimination {
        background-color: colors.$tint-secondary-20-hex;

        #process__of__elimination-content {
            
        }
    }
</style>