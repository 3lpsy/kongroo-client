export const setPaginatedArticlesSuccess = (state, {articles, meta}) => {
    state.paginated.data = articles;
    state.paginated.meta = meta;
}
