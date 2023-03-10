import { defineStore } from "pinia"

// Extension interface 
import IExtensionBaseData, { IExtensionTextualData } from '@/interfaces/interface-extension'

export const useExtensionStore = defineStore('extensionStore', {
    state: (): IExtensionBaseData => ({
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
        getTextualData: (state): IExtensionTextualData => state.textualData
    },
    actions: {
        setTextualData(data: any) { this.textualData = data }
    }
});