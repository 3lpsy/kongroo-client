const types = {
    repo: 'article/getters/repo',
    articles: 'article/getters/articles',
    article: 'article/getters/article',
    activeId: 'article/getters/activeId'


}

export {types};

export default {
    [types.repo]: (state, getters) => {
        return state.repo;
    },
    [types.articles]: (state, getters) => {
        let repo = getters[types.repo];

        if (! repo) {
            return [];
        }

        return repo.articles;
    },
    [types.activeId]: (state, getters) => {
        return state.activeId;
    },
    [types.article]: (state, getters) => {
        let repo = getters[types.repo];

        let activeId = getters[types.activeId];

        if (! repo) {
            return [];
        }

        return repo.articles.find((article) => {
            return article.id === activeId;
        });
    }
}
