import { defineStore } from "pinia"

// Home interface 
import IHomeBaseData, { IHomeTextualData } from "@/interfaces/interface-home"

export const useHomeStore = defineStore('homeStore', {
    state: (): IHomeBaseData => ({
        textualData: {
            canvas: {
                quoteBox: {
                    btnText: '',
                    quote: '',
                    heading: ''
                }
            }
        }
    }),
    getters: {
        getTextualData: (state): IHomeTextualData => state.textualData,
    },
    actions: {
        setTextualData(data: any) { this.textualData = data }
    }
});