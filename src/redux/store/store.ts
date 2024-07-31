import { combineReducers, configureStore } from '@reduxjs/toolkit'
import appStateSlice from '@/redux/slices/appStateSlice'

const reducers = {
  appState: appStateSlice.reducer,
}

const rootReducer = combineReducers({
  ...reducers,
})

const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    // preloadedState: getStoredState(),
    // middleware: getDefaultMiddleware =>
    //   getDefaultMiddleware()
    //     .concat(API.middleware)
    //     .concat(NextAPI.middleware)
    //     .concat(FreshDeskAPI.middleware),
  })

const store = setupStore()

const curState = store.getState()
// if (isAdmin && typeof window !== 'undefined') {
//   console.groupCollapsed('Root Store')
//   console.log(curState)
//   console.groupEnd()
// }

// store.subscribe(() => {
//   const curState = store.getState()
//   const storedState = getLocalStorageItem(NAME_STATE_LOCAL)
//
//   setLocalStorageItem(NAME_STATE_LOCAL, {
//     ...storedState,
//     // user: curState?.user,
//     userActions: curState?.userActions,
//   })
// })

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export default store
