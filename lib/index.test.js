const IndoUtcOffset = require('.');

describe('testing', () => {
  describe('forSelectOptions', () => {
    it.each([
      ['+07:00 / WIB', '+07:00'],
      ['+08:00 / WITA', '+08:00'],
      ['+09:00 / WIT', '+09:00'],
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
      ['+07:00', '+07:00 / WIB'],
      ['+08:00', '+08:00 / WITA'],
      ['+09:00', '+09:00 / WIT'],
    ])('offset2label(%s) => %s', (offset, label) => {
      expect(IndoUtcOffset.offset2label(offset)).toBe(label);
    });
  });

  describe('offset2shortLabel', () => {
    it.each([
      ['+07:00', 'WIB'],
      ['+08:00', 'WITA'],
      ['+09:00', 'WIT'],
    ])('offset2label(%s) => %s', (offset, label) => {
      expect(IndoUtcOffset.offset2shortLabel(offset)).toBe(label);
    });
  });

  describe('offset2Option', () => {
    it.each([
      ['+07:00', 'WIB'],
      ['+08:00', 'WITA'],
      ['+09:00', 'WIT'],
    ])('offset2label(%s) => %s', (offset, label) => {
      expect(IndoUtcOffset.offset2Option(offset)).toEqual(
        expect.objectContaining({
          label: `${offset} / ${label}`,
          value: offset,
        }),
      );
    });
  });
});
