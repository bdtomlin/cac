describe("cacApp.countryList.service", function () {
  var GeonamesSvcMock;
  beforeEach(function(done){
    module('cacApp.countryList.service');
    module(function($provide){
      GeonamesSvcMock = {
        allCountries: function(){
          return Promise.resolve('returned from geonames');
        }
      };

      spyOn(GeonamesSvcMock, 'allCountries').and.callThrough();
      $provide.value('GeonamesSvc', GeonamesSvcMock);
    });
    done();
  });

  describe("all", function () {
    it("queries geonames the first time it's called", function (done) {
      inject(function(CountryListSvc){
        CountryListSvc.all().then(function(val){
          expect(val).toBe('returned from geonames');
          done();
          expect(GeonamesSvcMock.allCountries).toHaveBeenCalled();
        });
      });
    });

    it("pulls from the cache after the first call", function (done) {
      inject(function(CountryListSvc){
        CountryListSvc.all().then(function(){
          CountryListSvc.all().then(function(val){
            expect(val).toBe('returned from geonames');
            expect(GeonamesSvcMock.allCountries.calls.count()).toBe(1);
            done();
          });
        });
      });
    });
  });
});
