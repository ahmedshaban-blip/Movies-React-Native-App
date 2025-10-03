import { createSlice, nanoid } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: {
      reducer: (state, action) => {
        
        const exists = state.favorites.find(item => item.id === action.payload.id);
        if (!exists) {
          state.favorites.push(action.payload);
        }
      },
      prepare: ({ image, name, description }) => {
        return {
          payload: {
            id: nanoid(), 
            image,
            name,
            description,
          },
        };
      },
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(item => item.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
