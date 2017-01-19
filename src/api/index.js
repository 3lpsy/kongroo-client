import ApiClass from './class';
import Resource from './resource';

const api = new ApiClass();

api.addResource(new Resource("/article/:articleId"), "article");
api.addResource(new Resource("/tag/:tagId"), "tag");

// api.addResource(new Resource("/series/:seriesId/article/:articleId"), "series.article");

export default api;
