describe("GeonamesSvc", function () {
  var countryJson = '{"geonames":[{"countryName":"Andorra","currencyCode":"EUR","fipsCode":"AN","countryCode":"AD","isoNumeric":"020","north":42.65604389629997,"capital":"Andorra la Vella","continentName":"Europe","areaInSqKm":"468.0","languages":"ca","isoAlpha3":"AND","continent":"EU","south":42.42849259876837,"east":1.7865427778319827,"geonameId":3041565,"west":1.4071867141112762,"population":"84000"}]}';
  beforeEach(module('cacApp.components.geonames'));

  var makeRequests = function($rootScope, $httpBackend){
    $rootScope.$digest();
    $httpBackend.flush();
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  };

  it('queries the geonames api for getCountry', inject(function(GeonamesSvc, $rootScope, $httpBackend){
    $httpBackend.expect('GET', 'http://api.geonames.org/countryInfoJSON?country=AD&username=bryantomlin')
                .respond(countryJson);
    GeonamesSvc.getCountry('AD').then(function(country){
      expect(country).toEqual(JSON.parse(countryJson).geonames[0]);
    });
    makeRequests($rootScope, $httpBackend);
  }));

  it('queries the geonames api for capitalPopulation', inject(function(GeonamesSvc, $rootScope, $httpBackend){
    $httpBackend.expect('GET', /searchJSON\?country=AD&featureCode=PPLC&name=Andorra\+la\+Vella/)
                .respond({"geonames": [{"population": 100}]});
    GeonamesSvc.capitalPopulation('AD', 'Andorra la Vella').then(function(population){
      expect(population).toEqual(100);
    });
    makeRequests($rootScope, $httpBackend);
  }));

  it('queries the geonames api for neighbors', inject(function(GeonamesSvc, $rootScope, $httpBackend){
    $httpBackend.expect('GET', 'http://api.geonames.org/neighboursJSON?geonameId=3041565&username=bryantomlin')
                .respond({"geonames": [countryJson]});
    GeonamesSvc.neighbors(3041565).then(function(response){
      expect(response).toEqual([countryJson]);
    });
    makeRequests($rootScope, $httpBackend);
  }));

  it('queries the geonames api for allCountries', inject(function(GeonamesSvc, $rootScope, $httpBackend){
    $httpBackend.expect('GET', 'http://api.geonames.org/countryInfoJSON?username=bryantomlin')
                .respond(countryJson);
    GeonamesSvc.allCountries().then(function(data){
      expect(data).toEqual(JSON.parse(countryJson).geonames);
    });
    makeRequests($rootScope, $httpBackend);
  }));
});
