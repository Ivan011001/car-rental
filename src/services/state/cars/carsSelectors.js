export const selectIsLoading = (state) => state.carsReducer.isLoading;

export const selectCars = (state) => state.carsReducer.cars;

export const selectFavorites = (state) => state.carsReducer.favorites;

export const selectAdvertsCount = (state) => state.carsReducer.count;

export const selectCurrentPage = (state) => state.carsReducer.page;
