// SH H_T149C Valuation Category : abap 2.2.0 at: 2021-04-14 18:36:59

const helpSign = [{ id: 'I', name: 'Include' }, { id: 'E', name: 'Exclude' }];
const helpOption = [
  { id: 'EQ', name: 'is' },
  { id: 'NE', name: 'is not' },
  { id: 'GT', name: 'greater than' },
  { id: 'LT', name: 'less than' },
  { id: 'GE', name: 'not less' },
  { id: 'LE', name: 'not greater' },
  { id: 'BT', name: 'between' },
  { id: 'NB', name: 'not between' },
  { id: 'CP', name: 'with pattern' },
  { id: 'NP', name: 'w/o pattern' }
];

const title = "Valuation Category";

const selectParams = [
  {
    FIELDNAME: "BWTTY",
    DATATYPE: "CHAR",
    LENG: 1,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "BTBEZ",
    DATATYPE: "CHAR",
    LENG: 15,
    DECIMALS: 0,
  }
];