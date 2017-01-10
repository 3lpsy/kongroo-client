const filterUnique = (items, compare, property) => {
    let comparePropertyTo = compare.map((item) => {
        return item[property];
    })
    return items.filter((item) => {
        return ! comparePropertyTo.includes(item[property]);
    })
}

export default filterUnique;