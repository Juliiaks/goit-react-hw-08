// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from "./reducer";

import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice";
import { filtersReducer } from "./filters/slice";
import { authReducer } from "./auth/slice";
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' 

// const persistConfig = {
//     key: 'contacts',
//     storage,
//     whitelist: ['items']
// };

// export const store = createStore(rootReducer);
// const persistedReducer = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
	reducer: {
		auth: authReducer,
		contacts: contactsReducer,
		filters: filtersReducer,
	}
})

// export const persistor = persistStore(store);