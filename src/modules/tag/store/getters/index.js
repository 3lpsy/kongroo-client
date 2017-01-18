const types = {
    repo: 'tag/getters/repo',
    tags: 'tag/getters/tags'
}

export {types};

let getters =  {
    [types.repo]: (state, getters) => {
        return state.repo;
    },
    [types.tags]: (state, getters) => {
        let repo = getters(types.repo);
        if (! repo) {
            return [];
        }
        return repo.tags;
    }
}

export default getters;
