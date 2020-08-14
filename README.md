# indonesia UTC Offsets JS

![npm](https://img.shields.io/npm/v/indonesia-utcoffset)  [![Build Status](https://travis-ci.com/ryanhs/indonesia-utcoffset.svg?branch=master)](https://travis-ci.com/ryanhs/indonesia-utcoffset)  [![Coverage Status](https://coveralls.io/repos/github/ryanhs/indonesia-utcoffset/badge.svg?branch=master)](https://coveralls.io/github/ryanhs/indonesia-utcoffset?branch=master)


### forSelectOptions

```
IndoUtcOffset.forSelectOptions =>
[
  { value: '+07:00', label: 'WIB' },
  { value: '+08:00', label: 'WIT' },
  { value: '+09:00', label: 'WITA' }
]
```


### offset2label

✓ offset2label(+07:00) => WIB  
✓ offset2label(+08:00) => WIT (1 ms)  
✓ offset2label(+09:00) => WITA  

### label2offset

✓ label2offset(WIB) => +07:00  
✓ label2offset(WIT) => +08:00 (5 ms)  
✓ label2offset(WITA) => +09:00  


## Installation

To install just use `yarn` or `npm`. Example: `yarn add indonesia-utcoffset`

## LICENSE

MIT
