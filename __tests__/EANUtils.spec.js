import EANUtils from '../EANUtils';

describe('EANUtils test suite', () => {
    let validEAN = '8401234567895',
        nonValidEAN ='8401234567890';

    it('should return TRUE if EAN is valid', () => {

        expect(EANUtils.isValidEAN13(validEAN)).toBe(true);
    });

    it('should return FALSE if EAN is NON valid', () => {

        expect(EANUtils.isValidEAN13(nonValidEAN)).toBe(false);
    });
});

describe('EANUtils test calculateControlDigit', () => {
  let ean1 = '840123456789',
      ean2 = '840123456700';

  it('should return 5',() => {

    expect(EANUtils.calculateControlDigit(ean1)).toBe(5);
  });

  it('should return 0',() => {

    expect(EANUtils.calculateControlDigit(ean2)).toBe(0);
  });
});
// sergi@ulabox.com
