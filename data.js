const BUGS = [
  {
    id: 1,
    createdAt: new Date(),
    severity: 0,
    comments: '',
    isResolved: false,
    description: 'A severe bug is encountered',
    title: 'Cannot login using test credentials',
    user: 'Rajeev'
  },
  {
    id: 2,
    createdAt: new Date(),
    severity: 3,
    comments: '',
    isResolved: true,
    description: 'Normal bug is encountered',
    title: 'Blah blah',
    user: 'Mahesh'
  }
];

module.exports = BUGS;
