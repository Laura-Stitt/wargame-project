var expect = chai.expect;

describe("ThisFunction", function() {
    describe('#sayHello', function() {
        it('should contcatenate the 2 parameters', function() {
            var x = sayHello('Shabbat Shalom, ', 'Tzipporah!');
            expect(x).to.equal('Shabbat Shalom, Tzipporah!');
        });

        it('should throw an error if the first paramater is not a string', function() {
            expect(function() {
                sayHello(Shalom, 'Tzipporah!');
            }).to.throw(Error);
        });
        
        it('should throw an error of the second parameter is not a string', function() {
            expect(function() {
                sayHello('Shalom', Tzipporah)
            }).to.throw(Error);
        });
    });
});