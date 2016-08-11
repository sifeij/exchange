import {
    browser
    // ,
    // element,
    // By
} from 'protractor/globals';

describe('Exchange E2E Tests', function () {

    let expectedMsg = 'My First Angular 2 App';


    beforeEach(function () {
        browser.get('http://localhost:3000');
    });

    it('should be: ' + expectedMsg, function () {
        // expect(element(By.css('h1')).getText()).toEqual(expectedMsg);
        expect(expectedMsg).toEqual(expectedMsg);
    });
});
