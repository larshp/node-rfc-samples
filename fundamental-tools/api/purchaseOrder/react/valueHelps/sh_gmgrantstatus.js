// SH GMGRANTSTATUS Search grants by status : abap 2.2.0 at: 2021-04-14 18:31:25

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

const title = "Search grants by status";

const selectParams = [
  {
    FIELDNAME: "GRANT_NBR",
    DATATYPE: "CHAR",
    LENG: 20,
    DECIMALS: 0,
    MEMORYID: "GM_GRANT_NBR"
  },
  {
    FIELDNAME: "GRANT_TYPE",
    DATATYPE: "CHAR",
    LENG: 2,
    DECIMALS: 0,
    MEMORYID: "GM_GRANT_TYPE"
  },
  {
    FIELDNAME: "LIFECYCLE_STATUS",
    DATATYPE: "CHAR",
    LENG: 5,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "TXT30",
    DATATYPE: "CHAR",
    LENG: 30,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "USER_STATUS",
    DATATYPE: "CHAR",
    LENG: 5,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "SHORT_DESC",
    DATATYPE: "CHAR",
    LENG: 20,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "OUTGOING",
    DATATYPE: "CHAR",
    LENG: 1,
    DECIMALS: 0,
  }
];