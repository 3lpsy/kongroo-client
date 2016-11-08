export const appendArticleRepositorySuccess = (state, articles) => {
    let repoIds = state.repository.data.map( (article) => {
        return article.id;
    });

    let newArticles = articles.filter( (article) => {
        if (repoIds.indexOf(article.id) === -1) {
            return article;
        }
    });
    state.repository.data = state.repository.data.concat(newArticles);
}
