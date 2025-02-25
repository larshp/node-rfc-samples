// SH WBWGE Find via keywords : abap 2.2.0 at: 2021-04-14 18:31:25

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

const title = "Find via keywords";

const selectParams = [
  {
    FIELDNAME: "CLINT",
    DATATYPE: "NUMC",
    LENG: 10,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "SPRAS",
    DATATYPE: "LANG",
    LENG: 1,
    DECIMALS: 0,
    MEMORYID: "SPR"
  },
  {
    FIELDNAME: "KLPOS",
    DATATYPE: "NUMC",
    LENG: 2,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "KLART",
    DATATYPE: "CHAR",
    LENG: 3,
    DECIMALS: 0,
    MEMORYID: "KAR"
  },
  {
    FIELDNAME: "CLASS",
    DATATYPE: "CHAR",
    LENG: 18,
    DECIMALS: 0,
    MEMORYID: "MKL"
  },
  {
    FIELDNAME: "KSCHL",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
    MEMORYID: "KBZ"
  },
  {
    FIELDNAME: "KSCHG",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  }
];