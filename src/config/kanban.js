export default {
  '040CDF59-7826-0FFE-A3CB-A87C6657649A': {
    factoryId: 'd515e368-ec4c-2cc8-be0d-dd1d83756d7c',
    dataLevel: 0,
    parentId: null,
    children: [
      'A8873A85-096C-B897-BEBA-FADEEE8E7FC3',
      '525EB075-77FF-A56A-F710-DE04E29F3495',
    ],
  },
  'A8873A85-096C-B897-BEBA-FADEEE8E7FC3': {
    dataLevel: 1,
    parentId: '040CDF59-7826-0FFE-A3CB-A87C6657649A',
    children: ['137AC74E-49E7-7A73-FCFC-6AD41176D371'],
    processors: ['const{data:[t]}=result;return t'],
  },
  '137AC74E-49E7-7A73-FCFC-6AD41176D371': {
    dataLevel: 2,
    parentId: 'A8873A85-096C-B897-BEBA-FADEEE8E7FC3',
    children: [],
    processors: [
      'const{scenicId:n,scenicName:c,ticketCount:t}=result.data;return{id:n,name:c,count:t}',
    ],
  },
  '525EB075-77FF-A56A-F710-DE04E29F3495': {
    dataLevel: 1,
    parentId: '040CDF59-7826-0FFE-A3CB-A87C6657649A',
    children: [],
    processors: ['const{data:t=[]}=result;return t.length'],
  },
};
