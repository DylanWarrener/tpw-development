import { defineStore } from "pinia"

// Kitchen interface 
import IKitchenBaseData, { IKitchenTextualData } from '@/interfaces/interface-kitchen'

export const useKitchenStore = defineStore('kitchenStore', {
    state: (): IKitchenBaseData => ({
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
        getTextualData: (state): IKitchenTextualData => state.textualData
    },
    actions: {
        setTextualData(data: any) { this.textualData = data }
    }
});