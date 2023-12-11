function unique(arr) {
    return arr.filter(function (item, index, array) {
        return array.indexOf(item) === index;
    });
}

let arr = ["one", "two", "three", "two", "four", "one", "one", "two", "five", "five"];
let uniqueArr = unique(arr);
alert(unique(arr));