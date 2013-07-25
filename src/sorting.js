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

    return {
        selectionSort: selectionSort,
        insertionSort: insertionSort
    };
})();
