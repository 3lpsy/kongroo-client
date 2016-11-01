// getters must be pure and resolve only from state
export const paginatedAuthors = state => state.paginated.data;

export const paginatedAuthorsIsLoading = state => state.paginated.meta.isLoading;

export const paginatedAuthorsIsComplete = state => state.paginated.meta.isComplete;

export const paginatedAuthorsIsFirstLoaded = state => state.paginated.meta.isFirstLoaded;

export const paginatedAuthorsIsEmpty = state => state.paginated.data.length === 0;

export const paginatedAuthorsCurrentPage = state => state.paginated.meta.pagination.currentPage;

export const paginatedAuthorsLimit = state => state.paginated.meta.pagination.limit;

export const paginatedAuthorsPagination = state => state.paginated.meta.pagination;
