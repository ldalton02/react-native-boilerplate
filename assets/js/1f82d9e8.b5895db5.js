"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4675],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(g,s(s({ref:t},p),{},{components:r})):n.createElement(g,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8122:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),s=["components"],o={slug:"/Migrating",title:"Migrating from V1 \ud83d\udc74"},l=void 0,c={unversionedId:"Others/4_1_Migrating from V1",id:"Others/4_1_Migrating from V1",title:"Migrating from V1 \ud83d\udc74",description:'For the V2, our code of conduct is "keep the code simple and concise" \ud83e\udd13',source:"@site/docs/4_Others/4_1_Migrating from V1.md",sourceDirName:"4_Others",slug:"/Migrating",permalink:"/react-native-boilerplate/docs/Migrating",draft:!1,editUrl:"https://github.com/thecodingmachine/react-native-boilerplate/edit/master/website-documentation/docs/docs/4_Others/4_1_Migrating from V1.md",tags:[],version:"current",frontMatter:{slug:"/Migrating",title:"Migrating from V1 \ud83d\udc74"},sidebar:"tutorialSidebar",previous:{title:"Beta build \ud83e\uddea",permalink:"/react-native-boilerplate/docs/BetaBuild"}},p={},u=[{value:"Redux",id:"redux",level:2},{value:"Migration guide",id:"migration-guide",level:3},{value:"Architecture",id:"architecture",level:3},{value:"Configure store",id:"configure-store",level:3},{value:"V1",id:"v1",level:4},{value:"V2",id:"v2",level:4},{value:"Example feature",id:"example-feature",level:3},{value:"V1",id:"v1-1",level:4},{value:"Store",id:"store",level:5},{value:"Saga",id:"saga",level:5},{value:"Service",id:"service",level:5},{value:"V2",id:"v2-1",level:4},{value:"Store",id:"store-1",level:5},{value:"Service",id:"service-1",level:5},{value:"I18next",id:"i18next",level:2},{value:"Flipper",id:"flipper",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'For the V2, our code of conduct is "keep the code simple and concise" \ud83e\udd13'),(0,i.kt)("h2",{id:"redux"},"Redux"),(0,i.kt)("p",null,"After the redux-toolkit release, and understood that we don't need the ",(0,i.kt)("strong",{parentName:"p"},"power"),", and the ",(0,i.kt)("strong",{parentName:"p"},"large among of functionalities")," that ",(0,i.kt)("strong",{parentName:"p"},"Redux Saga")," provides,\nwe conclude that, because we want simple and concise code, we will now use redux-toolkit."),(0,i.kt)("p",null,"\ud83d\udea8\ufe0f ",(0,i.kt)("strong",{parentName:"p"},"We decided to remove Redux Saga from the boilerplate not because this isn't a good library or a good pattern but for less complexity and use an official and light dependency like redux-toolkit.")," \ud83d\udea8\ufe0f"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Libraries"),(0,i.kt)("th",{parentName:"tr",align:"center"},"V1"),(0,i.kt)("th",{parentName:"tr",align:"center"},"V2"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Goal"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"redux"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"State management")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"redux saga"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Redux middleware")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"redux sauce"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Simplify redux syntax")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"redux-toolkit"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"New redux library with some function helpers")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"redux-toolkit-wrapper"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Easier CRUD redux-toolkit function helpers")))),(0,i.kt)("h3",{id:"migration-guide"},"Migration guide"),(0,i.kt)("p",null,"This is not really a migration guide because there is so much breaking changes between the two versions and mostly because of the update of all dependencies.\nSo, in next sections, there is a structure and code comparison."),(0,i.kt)("h3",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"First, a quick comparison on the tree files. On V1 the state management logic was divide in ",(0,i.kt)("inlineCode",{parentName:"p"},"Services"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Sagas")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Store"),".\nIn V2 it is divide in ",(0,i.kt)("inlineCode",{parentName:"p"},"Service")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Store"),". In V2, all directory as an ",(0,i.kt)("inlineCode",{parentName:"p"},"index.js")," file for better imports and a homogenization of the code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="V1"',title:'"V1"'},"Services\n    \u2514- UserService.js\nSagas\n    \u251c- UserSaga.js\n    \u251c- StartupSaga.js\n    \u2514- index.js\nStore\n    \u251c- Startup\n    \u2502   \u2514- Actions.js\n    \u251c- Theme...\n    \u251c- User\n    \u2502   \u251c- Actions.js\n    \u2502   \u251c- InitialSate.js\n    \u2502   \u251c- Reducers.js\n    \u2502   \u2514- Selectors.js\n    \u251c- CreateStore.js\n    \u2514- index.js\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="V2"',title:'"V2"'},"Services\n    \u251c- User\n    \u2502   \u251c- FetchOne.js\n    \u2502   \u2514- index.js\n    \u2514- index.js\nStore\n    \u251c- Startup\n    \u2502   \u251c- index.js\n    \u2502   \u2514- Init.js\n    \u251c- Theme...\n    \u251c- User\n    \u2502   \u251c- FetchOne.js\n    \u2502   \u2514- index.js\n    \u2514- index.js\n")),(0,i.kt)("h3",{id:"configure-store"},"Configure store"),(0,i.kt)("p",null,"Thanks to a refactoring and redux-toolkit, the store configuration is now in one file easy to understand and flipper debugging ready."),(0,i.kt)("h4",{id:"v1"},"V1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="V1  App/Stores/CreateStore.js"',title:'"V1',"":!0,'App/Stores/CreateStore.js"':!0},"import { applyMiddleware, compose, createStore } from 'redux'\nimport createSagaMiddleware from 'redux-saga'\nimport { persistReducer, persistStore } from 'redux-persist'\nimport storage from 'redux-persist/lib/storage'\n\nconst persistConfig = {\n  key: 'root',\n  storage: storage,\n  blacklist: [\n    // 'auth',\n  ],\n}\n\nexport default (rootReducer, rootSaga) => {\n  const middleware = []\n  const enhancers = []\n\n  // Connect the sagas to the redux store\n  const sagaMiddleware = createSagaMiddleware()\n  middleware.push(sagaMiddleware)\n\n  enhancers.push(applyMiddleware(...middleware))\n\n  // Redux persist\n  const persistedReducer = persistReducer(persistConfig, rootReducer)\n\n  const store = createStore(persistedReducer, compose(...enhancers))\n  const persistor = persistStore(store)\n\n  // Kick off the root saga\n  sagaMiddleware.run(rootSaga)\n\n  return { store, persistor }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="V1  App/Stores/index.js"',title:'"V1',"":!0,'App/Stores/index.js"':!0},"import { combineReducers } from 'redux'\nimport configureStore from './CreateStore'\nimport rootSaga from 'App/Sagas'\nimport { reducer as ExampleReducer } from './Example/Reducers'\n\nexport default () => {\n  const rootReducer = combineReducers({\n    /**\n     * Register your reducers here.\n     * @see https://redux.js.org/api-reference/combinereducers\n     */\n    example: ExampleReducer,\n  })\n\n  return configureStore(rootReducer, rootSaga)\n}\n")),(0,i.kt)("h4",{id:"v2"},"V2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="V2 src/Store/index.js"',title:'"V2','src/Store/index.js"':!0},"import AsyncStorage from '@react-native-async-storage/async-storage'\nimport { combineReducers } from 'redux'\nimport {\n  persistReducer,\n  persistStore,\n  FLUSH,\n  REHYDRATE,\n  PAUSE,\n  PERSIST,\n  PURGE,\n  REGISTER,\n} from 'redux-persist'\nimport { configureStore } from '@reduxjs/toolkit'\n\nimport startup from './Startup'\nimport user from './User'\nimport theme from './Theme'\n\nconst reducers = combineReducers({\n  startup,\n  user,\n  theme,\n})\n\nconst persistConfig = {\n  key: 'root',\n  storage: AsyncStorage,\n  whitelist: ['theme'],\n}\n\nconst persistedReducer = persistReducer(persistConfig, reducers)\n\nconst store = configureStore({\n  reducer: persistedReducer,\n  middleware: (getDefaultMiddleware) => {\n    const middlewares = getDefaultMiddleware({\n      serializableCheck: {\n        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],\n      },\n    })\n\n    if (__DEV__ && !process.env.JEST_WORKER_ID) {\n      const createDebugger = require('redux-flipper').default\n      middlewares.push(createDebugger())\n    }\n\n    return middlewares\n  },\n})\n\nconst persistor = persistStore(store)\n\nexport { store, persistor }\n")),(0,i.kt)("h3",{id:"example-feature"},"Example feature"),(0,i.kt)("p",null,"Now, a comparison with a feature example present in the V1 and in V2"),(0,i.kt)("h4",{id:"v1-1"},"V1"),(0,i.kt)("h5",{id:"store"},"Store"),(0,i.kt)("p",null,"In the boilerplate V1, the creation of the Store goes like this :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"init the state")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App/Stores/User/InitialState.js"',title:'"App/Stores/User/InitialState.js"'},"export const INITIAL_STATE = {\n  user: {},\n  userIsLoading: false,\n  userErrorMessage: null,\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"creation of actions")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App/Stores/User/Actions.js"',title:'"App/Stores/User/Actions.js"'},"import { createActions } from 'reduxsauce'\n\nconst { Types, Creators } = createActions({\n  fetchUser: null,\n  fetchUserLoading: null,\n  fetchUserSuccess: ['user'],\n  fetchUserFailure: ['errorMessage'],\n})\n\nexport const ExampleTypes = Types\nexport default Creators\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"creation of associated reducers")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App/Stores/User/Reducers.js"',title:'"App/Stores/User/Reducers.js"'},"import { INITIAL_STATE } from './InitialState'\nimport { createReducer } from 'reduxsauce'\nimport { ExampleTypes } from './Actions'\n\nexport const fetchUserLoading = (state) => ({\n  ...state,\n  userIsLoading: true,\n  userErrorMessage: null,\n})\n\nexport const fetchUserSuccess = (state, { user }) => ({\n  ...state,\n  user: user,\n  userIsLoading: false,\n  userErrorMessage: null,\n})\n\nexport const fetchUserFailure = (state, { errorMessage }) => ({\n  ...state,\n  user: {},\n  userIsLoading: false,\n  userErrorMessage: errorMessage,\n})\n\nexport const reducer = createReducer(INITIAL_STATE, {\n  [ExampleTypes.FETCH_USER_LOADING]: fetchUserLoading,\n  [ExampleTypes.FETCH_USER_SUCCESS]: fetchUserSuccess,\n  [ExampleTypes.FETCH_USER_FAILURE]: fetchUserFailure,\n})\n")),(0,i.kt)("h5",{id:"saga"},"Saga"),(0,i.kt)("p",null,"In the boilerplate V1, the creation of the Saga goes like this :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"creation of the saga")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App/Sagas/UserSaga.js"',title:'"App/Sagas/UserSaga.js"'},"import { put, call } from 'redux-saga/effects'\nimport ExampleActions from 'App/Stores/Example/Actions'\nimport { userService } from 'App/Services/UserService'\n\nexport function* fetchUser() {\n  yield put(ExampleActions.fetchUserLoading())\n\n  const user = yield call(userService.fetchUser)\n  if (user) {\n    yield put(ExampleActions.fetchUserSuccess(user))\n  } else {\n    yield put(\n      ExampleActions.fetchUserFailure('There was an error while fetching user informations.')\n    )\n  }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"listen the saga")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App/Sagas/index.js"',title:'"App/Sagas/index.js"'},"import { takeLatest, all } from 'redux-saga/effects'\nimport { ExampleTypes } from 'App/Stores/Example/Actions'\nimport { StartupTypes } from 'App/Stores/Startup/Actions'\nimport { fetchUser } from './ExampleSaga'\nimport { startup } from './StartupSaga'\n\nexport default function* root() {\n  yield all([\n    takeLatest(StartupTypes.STARTUP, startup),\n    takeLatest(ExampleTypes.FETCH_USER, fetchUser), // Add this line\n  ])\n}\n")),(0,i.kt)("h5",{id:"service"},"Service"),(0,i.kt)("p",null,"In the boilerplate V1, the creation of the Service goes like this :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App/Services/UserService.js"',title:'"App/Services/UserService.js"'},"import axios from 'axios'\nimport { Config } from 'App/Config'\nimport { is, curryN, gte } from 'ramda'\n\nconst isWithin = curryN(3, (min, max, value) => {\n  const isNumber = is(Number)\n  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)\n})\nconst in200s = isWithin(200, 299)\n\nconst userApiClient = axios.create({\n  baseURL: Config.API_URL,\n  headers: {\n    Accept: 'application/json',\n    'Content-Type': 'application/json',\n  },\n  timeout: 3000,\n})\n\nfunction fetchUser() {\n  const number = Math.floor(Math.random() / 0.1) + 1\n\n  return userApiClient.get(number.toString()).then((response) => {\n    if (in200s(response.status)) {\n      return response.data\n    }\n\n    return null\n  })\n}\n\nexport const userService = {\n  fetchUser,\n}\n")),(0,i.kt)("h4",{id:"v2-1"},"V2"),(0,i.kt)("h5",{id:"store-1"},"Store"),(0,i.kt)("p",null,"In the boilerplate V2 action, initial state and reducers goes like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/Store/User/FetchOne.js"',title:'"src/Store/User/FetchOne.js"'},"import {\n  buildAsyncState,\n  buildAsyncReducers,\n  buildAsyncActions,\n} from '@thecodingmachine/redux-toolkit-wrapper'\nimport fetchOneUserService from '@/Services/User/FetchOne'\n\nexport default {\n  initialState: buildAsyncState('fetchOne'),\n  action: buildAsyncActions('user/fetchOne', fetchOneUserService),\n  reducers: buildAsyncReducers({\n    errorKey: 'fetchOne.error',\n    loadingKey: 'fetchOne.loading',\n  }),\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/Store/User/index.js"',title:'"src/Store/User/index.js"'},"import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'\nimport FetchOne from './FetchOne'\n\nconst sliceInitialState = { item: {} }\n\nexport default buildSlice('user', [FetchOne], sliceInitialState).reducer\n")),(0,i.kt)("h5",{id:"service-1"},"Service"),(0,i.kt)("p",null,"In the boilerplate V2, the creation of the Service goes like this :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import api, { handleError } from '@/Services'\n\nexport default async (userId) => {\n  if (!userId) {\n    return handleError({ message: 'User ID is required' })\n  }\n  const response = await api.get(`users/${userId}`)\n  return response.data\n}\n")),(0,i.kt)("h2",{id:"i18next"},"I18next"),(0,i.kt)("p",null,"This is a new feature of the boilerplate V2, now it handles internationalization thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://www.i18next.com/"},"i18next"),".\nSee the documentation about it ",(0,i.kt)("a",{parentName:"p",href:"/react-native-boilerplate/docs/AddALangTranslation"},"here")),(0,i.kt)("h2",{id:"flipper"},"Flipper"),(0,i.kt)("p",null,"This is a new feature of the boilerplate V2, Flipper is now fully integrate with the redux debugger plugin.\nSee the documentation about it ",(0,i.kt)("a",{parentName:"p",href:"/react-native-boilerplate/docs/UsingFlipper"},"here")))}m.isMDXComponent=!0}}]);