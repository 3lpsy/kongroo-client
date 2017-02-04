
import napcap from './../../napcap/dist/napcap';

const api = napcap.api();

api.addResource(napcap.resource("/article/:articleId"), "article");
api.addResource(napcap.resource("/tag/:tagId"), "tag");
api.addResource(napcap.resource("/series/:seriesId/article/:articleId"), "series.article");

export default api;
