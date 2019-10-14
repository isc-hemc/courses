const iterative = str => {
    let res = "";
    for (let char of str) {
        res = char + res;
    }
    return res;
}

const recursive = (str, len, res = "") => {
    if (len <= 0) {
        return res;
    }
    res += str[len - 1]
    return recursive(str, len - 1, res);
}

const withReduce = (str) => {
    return str.split("").reduce((res, char) =>  char + res);
}

const withPrototypes = str => {
    return str.split("").reverse().join("");
}
