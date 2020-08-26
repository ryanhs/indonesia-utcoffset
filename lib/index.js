const offsets = {
  '+07:00': { offset: '+07:00', label: 'WIB' },
  '+08:00': { offset: '+08:00', label: 'WITA' },
  '+09:00': { offset: '+09:00', label: 'WIT' },
};

const createLabel = (v) => `${v.offset} / ${v.label}`;
const createOption = (v) => ({ value: v.offset, label: createLabel(v) });
const forSelectOptions = Object.values(offsets).map(createOption);

// const offset2labels = Object.values(offsets).reduce((a, c) => ({ ...a, [c.offset]: c.label }), {});
// const label2offsets = Object.values(offsets).reduce((a, c) => ({ ...a, [c.label]: c.offset }), {});

module.exports = {
  forSelectOptions,
  offset2Option: (offset) => createOption(offsets[offset]),

  offset2shortLabel: (offset) => offsets[offset].label,
  offset2label: (offset) => createLabel(offsets[offset]),
};
