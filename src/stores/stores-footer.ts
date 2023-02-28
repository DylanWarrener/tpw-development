import { defineStore } from 'pinia'

// Footer interface 
import IFooterData, { IFooterTextualData } from '@/interfaces/interface-footer';

export const useFooterStore = defineStore('footerStore', {
  state: (): IFooterData => ({
    textualData: {
      contactDetails: {
        email: '',
        number: '',
      },
      icons: {
        backToTop: '',
      },
      socials: {
        links: {
          facebook: '',
          instagram: '',
          twitter: '',
        },
        text: {
          facebook: '',
          instagram: '',
          twitter: '',
        },
      },
    },
  }),
  getters: {
    getTextualData: (state): IFooterTextualData => state.textualData,
  },
  actions: {
    setTextualData(data: any): void {
      this.textualData = data;
    },
  },
});