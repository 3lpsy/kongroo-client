
import Transformer from "./transformer";

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
            publishedAt: article.publishedAt
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
