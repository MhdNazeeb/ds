function merge(arr, start, mid, end)
{
    let start2 = mid + 1;
    if (arr[mid] <= arr[start2])
    {
        return;
    }
    while (start <= mid && start2 <= end)
    {
        if (arr[start] <= arr[start2])
        {
            start++;
        }
        else
        {
            let value = arr[start2];
            let index = start2;
            while (index != start)
            {
                arr[index] = arr[index - 1];
                index--;
            }
            arr[start] = value;
             start++;
            mid++;
            start2++;
        }
    }
}
function mergeSort(arr, l, r)
{
    if (l < r)
    {
        let m = l + Math.floor((r - l) / 2);
         mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
 
        merge(arr, l, m, r);
    }
}
let arr = [ 12, 11, 13, 5, 6, 7 ];
let arr_size = arr.length;
mergeSort(arr, 0, arr_size - 1);
console.log(arr);