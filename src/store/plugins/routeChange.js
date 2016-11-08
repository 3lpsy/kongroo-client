export default () => {

    return (store) => {

        store.subscribe((mutation, state) => {

            if (mutation.type === "router/ROUTE_CHANGED") {

                console.log(mutation);
                
            }

        });

    }

};
