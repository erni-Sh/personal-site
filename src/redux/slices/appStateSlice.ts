import { createSlice } from '@reduxjs/toolkit'
// import {
//     formDataProps,
//     typesOfFormValue,
// } from 'hooks/formHooks/useReduxFormDataChange'

interface IInitialState {
  screenType: 'desktop' | 'tablet' | 'mobile' | ''
  // openedModal: string
  // bufferModal: {
  //     [index: string]: string
  // }
  // isMobMenuOpened: boolean
  // isMidMenuOpened: boolean
  isHeaderCovered: boolean
  // isScrollOnTop: boolean
  // isVisibleScrollToTop: boolean

  // isFontsLoaded: boolean
  // isStoredUserLoaded: boolean
  // isRouteCorrect: boolean

  // formData: formDataProps
}

const initialState = {
  screenType: '',
  // openedModal: '',
  // bufferModal: {},
  // isMobMenuOpened: false,
  // isMidMenuOpened: false,
  isHeaderCovered: true,
  // isScrollOnTop: false,
  // isVisibleScrollToTop: false,
  // for new site popup
  // isVisibleFooterBottom: false,
  // isVisibleCookiePopup: false,

  // isFontsLoaded: false,
  // isStoredUserLoaded: false,
  // isRouteCorrect: true, // first validate on middleware
  //
  // formData: {},
} as IInitialState

export const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setScreenType(state, action) {
      return {
        ...state,
        screenType: action.payload,
      }
    },
    // openModal(state, action) {
    //   return {
    //     ...state,
    //     openedModal: action.payload,
    //   }
    // },
    // closeModal(state) {
    //   return {
    //     ...state,
    //     openedModal: '',
    //   }
    // },
    // setBufferModal(
    //   state,
    //   action: {
    //     payload: {
    //       [index: string]: string
    //     }
    //   },
    // ) {
    //   return {
    //     ...state,
    //     bufferModal: action.payload,
    //   }
    // },
    // // clearBufferModal(state) {
    // //   return {...state, bufferModal: {}};
    // // },
    // closeMobMenu(state) {
    //   return {
    //     ...state,
    //     isMobMenuOpened: false,
    //   }
    // },
    // toggleMobMenuOpened(state) {
    //   return {
    //     ...state,
    //     isMobMenuOpened: !state.isMobMenuOpened,
    //   }
    // },
    // closeMidMenu(state) {
    //   return {
    //     ...state,
    //     isMidMenuOpened: false,
    //   }
    // },
    // toggleMidMenuOpened(state) {
    //   return {
    //     ...state,
    //     isMidMenuOpened: !state.isMidMenuOpened,
    //   }
    // },
    setIsHeaderCovered(state, action) {
      return { ...state, isHeaderCovered: action.payload }
    },
    // setIsScrollOnTop(state, action) {
    //   return {
    //     ...state,
    //     isScrollOnTop: action.payload,
    //   }
    // },
    // setIsVisibleScrollToTop(state, action) {
    //   return {
    //     ...state,
    //     isVisibleScrollToTop: action.payload,
    //   }
    // },
    //
    // // for new site popup
    // setIsVisibleFooterBottom(state, action) {
    //   return {
    //     ...state,
    //     isVisibleFooterBottom: action.payload,
    //   }
    // },
    // setIsVisibleCookiePopup(state, action) {
    //   return {
    //     ...state,
    //     isVisibleCookiePopup: action.payload,
    //   }
    // },
    //
    // setFontsLoaded(state) {
    //   return {
    //     ...state,
    //     isFontsLoaded: true,
    //   }
    // },
    // setStoredUserLoaded(state, action) {
    //   return {
    //     ...state,
    //     isStoredUserLoaded: action.payload,
    //   }
    // },
    // setRouteCorrect(state, action) {
    //   return {
    //     ...state,
    //     isRouteCorrect: action.payload,
    //   }
    // },
    // clearFormData(state) {
    //   return {
    //     ...state,
    //     formData: {},
    //   }
    // },
    // updateFormData(
    //   state,
    //   action: {
    //     payload: {
    //       name: string
    //       value: typesOfFormValue
    //     }
    //   },
    // ) {
    //   const { name, value } = action.payload
    //   return {
    //     ...state,
    //     formData: {
    //       ...state.formData,
    //       [name]: value,
    //     },
    //   }
    // },
  },
})

export default appStateSlice

export const {
  setScreenType,
  setIsHeaderCovered,

  // openModal,
  // closeModal,
  // setBufferModal,
  // // clearBufferModal,
  // closeMobMenu,
  // toggleMobMenuOpened,
  // closeMidMenu,
  // toggleMidMenuOpened,
  // setIsScrollOnTop,
  // setIsVisibleScrollToTop,
  //
  // setIsVisibleFooterBottom,
  // setIsVisibleCookiePopup,
  //
  // setFontsLoaded,
  // setStoredUserLoaded,
  // setRouteCorrect,
  // clearFormData,
  // updateFormData,
} = appStateSlice.actions
