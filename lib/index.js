const offsets = {
  7: { offset: '+07:00', label: 'WIB' },
  8: { offset: '+08:00', label: 'WIT' },
  9: { offset: '+09:00', label: 'WITA' },
};

const forSelectOptions = Object.values(offsets).map((v) => ({ value: v.offset, label: v.label }));
const offset2labels = Object.values(offsets).reduce((a, c) => ({ ...a, [c.offset]: c.label }), {});
const label2offsets = Object.values(offsets).reduce((a, c) => ({ ...a, [c.label]: c.offset }), {});

module.exports = {
  forSelectOptions,
  offset2label: (offset) => offset2labels[offset],
  label2offset: (label) => label2offsets[label],
};
