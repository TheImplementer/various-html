for (var method in sorting) {

    describe(method, function() {

        it('should sort an empty array', function() {
            var array = [];
            sorting[method](array);
            expect(array.length).toBe(0);
        });

        it('should sort a single element array', function() {
            var array = [1];
            sorting[method](array);
            expect(array).toEqual([1]);
        });

        it('should sort an array as expected', function() {
            var array = [3, 2, 1];
            sorting[method](array);
            expect(array).toEqual([1, 2, 3]);
        });
    });

}
