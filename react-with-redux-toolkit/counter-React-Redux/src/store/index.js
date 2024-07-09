import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counter';

const counterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});

export default counterStore;