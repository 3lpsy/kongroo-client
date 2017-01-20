export default {
    methods: {
        paginate(data, pagination) {
            if (! data) {
                return [];
            }

            if (! pagination) {
                pagination = {
                    page: 1,
                    limit: 15
                }
            }

            let index = pagination.page * pagination.limit;

            return data.slice(index, pagination.limit);

        }
    }
}
