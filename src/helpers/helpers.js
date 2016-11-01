const csv = (array) => {
    return array.join(",");
}

const cap = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

const decap = (word) => {
    return word.charAt(0).toLowerCase() + word.slice(1)
}

const folder2FileName = (folder) => {
    let files = folder.split("-");
    files = files.map((file) => {
        return cap(file)
    })
    return files.join("");
}

export default {cap, folder2FileName, csv, decap};

