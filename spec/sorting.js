describe("insertionSort", function() {

    it('should sort an empty array', function() {
        var array = [];
        sorting.insertionSort(array);
        expect(array.length).toBe(0);
    });

    it('should sort a single element array', function() {
        var array = [1];
        sorting.insertionSort(array);
        expect(array).toEqual([1]);
    });

    it('should sort an array as expected', function() {
        var array = [3, 2, 1];
        sorting.insertionSort(array);
        expect(array).toEqual([1, 2, 3]);
    });
});

describe("selectionSort", function() {

    it('should sort an empty array', function() {
        var array = [];
        sorting.selectionSort(array);
        expect(array.length).toBe(0);
    });

    it('should sort a single element array', function() {
        var array = [1];
        sorting.selectionSort(array);
        expect(array).toEqual([1]);
    });

    it('should sort an array as expected', function() {
        var array = [3, 2, 1];
        sorting.selectionSort(array);
        expect(array).toEqual([1, 2, 3]);
    });
});

describe("quickSort", function() {

    it('should sort an empty array', function() {
        var array = [];
        sorting.quickSort(array);
        expect(array.length).toBe(0);
    });

    it('should sort a single element array', function() {
        var array = [1];
        sorting.quickSort(array);
        expect(array).toEqual([1]);
    });

    it('should sort an array as expected', function() {
        var array = [3, 2, 1];
        sorting.quickSort(array);
        expect(array).toEqual([1, 2, 3]);
    });
});
