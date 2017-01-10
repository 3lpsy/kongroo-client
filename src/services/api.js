import ApiClass from './apiClass';
import Resource from './resource';

let api = new ApiClass();

api.addResource(new Resource("/article/:articleId"), "article");
api.addResource(new Resource("/article/:articleId/tag/:tagId"), "article.tag");
api.addResource(new Resource("/series/:seriesId/article/:articleId"), "series.article");

export default api;
