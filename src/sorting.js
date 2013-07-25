var sorting = (function() {

    var swapArrayElements = function(array, former, latter) {
        var tmp = array[former];
        array[former] = array[latter];
        array[latter] = tmp;
    };

    var selectionSort = function(array) {
        for (var i = 0; i < array.length; i++) {
            for (var j = i + 1; j < array.length; j++) {
                if (array[j] < array[i]) {
                    swapArrayElements(array, i, j);
                }
            }
        }
    };

    var insertionSort = function(array) {
    
        for (var i = 1; i < array.length; ++i) {
            var j = i;
            while (j > 0 && array[j] < array[j-1]) {
                swapArrayElements(array, j, j-1);
                --j;
            }
        }
    };


    var quickSortPartitioner = function(array, start, end) {
        var pivot = array[end-1];
        var i = start - 1;
        for (var j = start; j < end-1; ++j) {
            if (array[j] <= pivot) {
                ++i;
                swapArrayElements(array, i, j);
            }
        }
        swapArrayElements(array, i+1, end-1);
        return i+1;
    };

    var inPlaceQuickSortMethod = function(array, start, end) {
        if (end <= start) return;
        var pivotIndex = quickSortPartitioner(array, start, end);
        inPlaceQuickSortMethod(array, start, pivotIndex-1);
        inPlaceQuickSortMethod(array, pivotIndex+1, end);
    };

    var inPlaceQuickSort = function(array) {
        inPlaceQuickSortMethod(array, 0, array.length);
    };

    var quickSort = function(array) {
        if (array.length === 0) return [];
        var lastIndex = array.length - 1;
        var pivot = array[lastIndex];
        var lesser = [];
        var greater = [];
        for (var i = 0; i < lastIndex; ++i) {
            (array[i] <= pivot ? lesser : greater).push(array[i]);
        }
        return quickSort(lesser).concat([pivot], quickSort(greater));
    };

    return {
        selectionSort: selectionSort,
        insertionSort: insertionSort,
        inPlaceQuickSort: inPlaceQuickSort,
        quickSort: quickSort
    };
})();
