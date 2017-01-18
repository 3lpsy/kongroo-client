import ApiClass from './class';
import Resource from './resource';

let api = new ApiClass();

// api.addResource(new Resource("/article/:articleId"), "article");
api.addResource(new Resource("/article/:articleId/tag/:tagId/comment/:commentId/series/:seriesId"), "article.tag.comment.series");
// api.addResource(new Resource("/series/:seriesId/article/:articleId"), "series.article");

export default api;
