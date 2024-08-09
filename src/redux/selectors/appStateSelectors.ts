import { RootState } from '@/redux/store/store'
import { useSelector } from 'react-redux'

// export const getOpenedModal = (state: RootState) => state.appState.openedModal
// export const getBufferModal = (state: RootState) => state.appState.bufferModal
export const getScreenType = (state: RootState) => state.appState.screenType
// export const getIsMobMenuOpened = (state: RootState) =>
//   state.appState.isMobMenuOpened
// export const getIsMidMenuOpened = (state: RootState) =>
//   state.appState.isMidMenuOpened
export const getIsHeaderCovered = (state: RootState) =>
  state.appState.isHeaderCovered
// export const getIsScrollOnTop = (state: RootState) =>
//   state.appState.isScrollOnTop
// export const getIsVisibleScrollToTop = (state: RootState) =>
//   state.appState.isVisibleScrollToTop
//
// export const getIsVisibleFooterBottom = (state: RootState) =>
//   state.appState.isVisibleFooterBottom
// export const getIsVisibleCookiePopup = (state: RootState) =>
//   state.appState.isVisibleCookiePopup
//
// export const getIsFontsLoaded = (state: RootState) =>
//   state.appState.isFontsLoaded
// export const getIsStoredUserLoaded = (state: RootState) =>
//   state.appState.isStoredUserLoaded
// export const getIsRouteCorrect = (state: RootState) =>
//   state.appState.isRouteCorrect
//
// export const getFormData = (state: RootState) => state.appState.formData
// export const getReduxFormField = (fieldName: string) => {
//   return useSelector((state: RootState) => state.appState.formData[fieldName])
// }
//
// export const getIsAppReady = (state: RootState) =>
//   // state.appState.isStoredUserLoaded &&
//   state.appState.isRouteCorrect
// // state.appState.isFontsLoaded;
