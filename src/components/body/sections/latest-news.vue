<template>  
    <div id='latest__news'>
        <section-container-component
            :heading='latestNewsHeading'
            :subheading='latestNewsSubheading'
        >
            <template #content>
                <div id='latest__news-content'>
                    Latest News - Content not added yet
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
        name: 'latest-news-component',
        components: {
            'section-container-component': ContainerSectionContent
        },
        computed: {
            latestNewsHeading(): string { return this.storeCommon.getTextualData.section.latestNews.heading },
            latestNewsSubheading(): string { return this.storeCommon.getTextualData.section.latestNews.subheading },
        },
        setup() {
            const storeCommon = parentStore()
            return { storeCommon }
        }
    })
</script>

<style lang='scss'>
    @use '@/styles/all/colors';
    
    #latest__news {
        background-color: colors.$theme-secondary-hex;

        #latest__news-content {
            
        }
    }
</style>