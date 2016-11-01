// getters must be pure and resolve only from state
export const paginatedSeries = state => state.paginated.data;

export const paginatedSeriesIsLoading = state => state.paginated.meta.isLoading;

export const paginatedSeriesIsComplete = state => state.paginated.meta.isComplete;

export const paginatedSeriesIsFirstLoaded = state => state.paginated.meta.isFirstLoaded;

export const paginatedSeriesIsEmpty = state => state.paginated.data.length === 0;

export const paginatedSeriesCurrentPage = state => state.paginated.meta.pagination.currentPage;

export const paginatedSeriesLimit = state => state.paginated.meta.pagination.limit;

export const paginatedSeriesPagination = state => state.paginated.meta.pagination;
