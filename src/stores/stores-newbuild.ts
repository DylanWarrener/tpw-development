import { defineStore } from "pinia"

// Newbuild interface 
import INewbuildBaseData, { INewbuildTextualData } from '@/interfaces/interface-newbuild'

export const useNewbuildStore = defineStore('newbuildStore', {
    state: (): INewbuildBaseData => ({
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
        getTextualData: (state): INewbuildTextualData => state.textualData
    },
    actions: {
        setTextualData(data: any) { this.textualData = data }
    }
});