import { defineStore } from "pinia"

// Bathroom interface 
import IBathroomBaseData, { IBathroomTextualData } from '@/interfaces/interface-bathroom'

export const useBathroomStore = defineStore('bathroomStore', {
    state: (): IBathroomBaseData => ({
        textualData: {
            canvas: {
                quoteBox: {
                    heading: '',
                    quote: ''
                }
            }
        }
    }),
    getters: {
        getTextualData: (state): IBathroomTextualData => state.textualData
    },
    actions: {
        setTextualData(data: any) { this.textualData = data }
    }
});