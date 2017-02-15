
import napcap from './../../napcap/dist/napcap';

const api = napcap.api();

api.addResource(napcap.resource("/article/:articleId"), "article");
api.addResource(napcap.resource("/tag/:tagId"), "tag");

api.addResource(napcap.resource("/series/:seriesId/article/:articleId"), "series.article");
api.addRoute(napcap.route("/auth/login/start"), "auth.login.start", 'store');
api.addRoute(napcap.route("/auth/login/password"), "auth.login.password", 'store');
api.addRoute(napcap.route("/auth/login/email"), "auth.login.email", 'store');
api.addRoute(napcap.route("/auth/login/sms"), "auth.login.sms", 'store');
api.addRoute(napcap.route("/auth/login/authenticate"), "auth.login.authenticate", 'store');

export default api;
