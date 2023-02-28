import { defineStore } from "pinia"

// Refurbishment interface 
import IRefubishmentBaseData, { IRefubishmentTextualData } from '@/interfaces/interface-refurbishment'

export const useRefurbishmentStore = defineStore('refurbishmentStore', {
    state: (): IRefubishmentBaseData => ({
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
        getTextualData: (state): IRefubishmentTextualData => state.textualData
    },
    actions: {
        setTextualData(data: any) { this.textualData = data }
    }
});