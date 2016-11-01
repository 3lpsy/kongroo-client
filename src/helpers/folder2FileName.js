import {cap} from "./cap";

export const folder2FileName = (folder) => {
    let files = folder.split("-");
    files = files.map((file) => {
        return cap(file)
    })
    return files.join("");
}
