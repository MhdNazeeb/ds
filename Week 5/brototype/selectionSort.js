function selection(a) {
    let i, j
    for (i = 0; i < a.length - 1; i++) {
        let min = i
        for (j = i + 1; j < a.length; j++) {
            if (a[j] < a[min]) {
                min = j
            }
        }
        let temp = a[i]
        a[i] = a[min]
        a[min] = temp
    }
    return a
}
console.log(selection([3, 1, 4, 21, 4]));