
import Transformer from "./transformer";
import moment from 'moment';
export default class ArticleTransformer extends Transformer {

    static get (article) {
        return {
            id: article.id,
            title: article.title,
            subTitle: article.subTitle,
            sections: article.sections,
            status: article.status,
            tags: article.tags,
            author: article.author,
            createdAt: article.createdAt,
            updatedAt: article.updatedAt,
            queriedAt: article.queriedAt,
            publishedAt: article.publishedAt,
            transformedAt: moment().format('X')
        };
    }

    static send (article) {
        return {
            id: article.id,
            title: article.title,
            subTitle: article.subTitle,
            sections: article.sections,
            status: article.status,
            tags: article.tags,
            author: article.author,
            publishedAt: article.publishedAt
        };
    }
}
