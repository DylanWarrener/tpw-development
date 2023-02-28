import { defineStore } from 'pinia'

// Header interface
import IHeaderData, { ITextualData } from '@/interfaces/interface-header'

export const useHeaderStore = defineStore('headerStore', {
    state: (): IHeaderData => ({
        textualData: {
            cookies: '',
            icons: {
                dropdown: ''
            },
            updates: ''
        },
        isSmallScreenSize: false,
        isBurgerMenuActive: false,
        isCookiesActive: false,
        isUpdatesActive: false,
        isNavHidden: false,
        navOrientation: 'horizontal',
        navStatus: 'closed'
    }),
    getters: {
        getTextualData: (state): ITextualData => state.textualData,
        getIsSmallScreenSize: (state): boolean => state.isSmallScreenSize,
        getIsBurgerMenuActive: (state): boolean => state.isBurgerMenuActive,
        getIsCookiesActive: (state): boolean => state.isCookiesActive,
        getIsUpdatesActive: (state): boolean => state.isUpdatesActive,
        getIsNavHidden: (state): boolean => state.isNavHidden,
        getNavOrientation: (state): string => state.navOrientation,
        getNavStatus: (state): string => state.navStatus
    },
    actions: {
        setTextualData(data: any): void { this.textualData = data },
        setSmallScreenSize(data: boolean): void { this.isSmallScreenSize = data },
        setIsBurgerMenuActive(data: boolean): void { this.isBurgerMenuActive = data },
        setIsCookiesActive(data: boolean): void { this.isCookiesActive = data },
        setIsUpdatesActive(data: boolean): void { this.isUpdatesActive = data },
        setIsNavHidden(data: boolean): void { this.isNavHidden = data },
        setNavOrientation(data: string): void { this.navOrientation = data },
        setNavStatus(data: string): void { this.navStatus = data }
    }
});