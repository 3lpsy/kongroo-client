import Transformer from "./transformer";

export default class PaginationTransformer extends Transformer {

    static get (pagination) {
        return {
            totalCount: pagination.count,
            totalPages: pagination.totalPages,
            currentPage: pagination.currentPage,
            limit: pagination.limit,
            hasMore: pagination.hasMore
        };
    }

    static send (pagination) {
        return {
            count: pagination.totalCount,
            totalPages: pagination.totalPages,
            currentPage: pagination.currentPage,
            limit: pagination.limit,
            hasMore: pagination.hasMore
        };
    }
}
