import { defineStore } from 'pinia'

// News interface
import INewsBaseData, { INewsTextualData } from '@/interfaces/interface-news'

export const useNewsStore = defineStore('newsStore', {
    state: (): INewsBaseData => ({
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
        getTextualData: (state): INewsTextualData => state.textualData
    },
    actions: {
        setTextualData(data: any): void { this.textualData = data }
    }
});