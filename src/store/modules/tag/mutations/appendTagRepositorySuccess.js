export const appendTagRepositorySuccess = (state, tags) => {
    let repoIds = state.repository.data.map( (tag) => {
        return tag.id;
    });

    let newTags = tags.filter( (tag) => {
        if (repoIds.indexOf(tag.id) === -1) {
            return tag;
        }
    });
    state.repository.data = state.repository.data.concat(newTags);
}
