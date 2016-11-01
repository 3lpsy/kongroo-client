// getters must be pure and resolve only from state
export const paginatedArticles = state => state.paginated.data;

export const paginatedArticlesIsLoading = state => state.paginated.meta.isLoading;

export const paginatedArticlesIsComplete = state => state.paginated.meta.isComplete;

export const paginatedArticlesIsFirstLoaded = state => state.paginated.meta.isFirstLoaded;

export const paginatedArticlesIsEmpty = state => state.paginated.data.length === 0;

export const paginatedArticlesCurrentPage = state => state.paginated.meta.pagination.currentPage;

export const paginatedArticlesLimit = state => state.paginated.meta.pagination.limit;

export const paginatedArticlesPagination = state => state.paginated.meta.pagination;
