
import Transformer from "./transformer";

export default class TagTransformer extends Transformer {

    static get (tag) {
        return {
            id: tag.id,
            name: tag.name
        };
    }

    static send (tag) {
        return {
            id: tag.id,
            name: tag.name
        };
    }
}
