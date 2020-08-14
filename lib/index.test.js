const IndoUtcOffset = require('.');

describe('testing', () => {
  describe('forSelectOptions', () => {
    it.each([
      ['WIB', '+07:00'],
      ['WIT', '+08:00'],
      ['WITA', '+09:00'],
    ])('{ value: %s, label: %s }', (label, value) => {
      expect(IndoUtcOffset.forSelectOptions).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            label,
            value,
          }),
        ]),
      );
    });
  });

  describe('offset2label', () => {
    it.each([
      ['+07:00', 'WIB'],
      ['+08:00', 'WIT'],
      ['+09:00', 'WITA'],
    ])('offset2label(%s) => %s', (offset, label) => {
      expect(IndoUtcOffset.offset2label(offset)).toBe(label);
    });
  });

  describe('label2offset', () => {
    it.each([
      ['WIB', '+07:00'],
      ['WIT', '+08:00'],
      ['WITA', '+09:00'],
    ])('label2offset(%s) => %s', (label, offset) => {
      expect(IndoUtcOffset.label2offset(label)).toBe(offset);
    });
  });
});
