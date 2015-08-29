if( bills.find().count() === 0){
  bills.insert({
    serial: '4829892',
    denomination: '20',
    series: '2009',
    registeredby: 'celso.mireles@gmail.com',
    history: [
      {
        timestamp: 'Wed Aug 26 2015 12:14:14 GMT-0700 (MST)',
        zip: '85037',
        recordedby: 'celso.mireles@gmail.com',
        note: "This is a note"
      },
      {
        timestamp: 'Wed Aug 26 2015 13:14:14 GMT-0700 (MST)',
        zip: '85037',
        recordedby: 'celso.mireles@gmail.com',
        note: "Yay!"
      },
      {
        timestamp: 'Wed Aug 26 2015 15:14:14 GMT-0700 (MST)',
        zip: '77023',
        recordedby: 'celso.mireles@gmail.com',
        note: "Got this as change."
      }

    ]
  });

  bills.insert({
    serial: '4829894',
    denomination: '5',
    series: '2013',
    registeredby: 'celso.mireles@gmail.com',
    history: [
      {
        timestamp: 'Wed Aug 26 2015 02:14:14 GMT-0700 (MST)',
        zip: '85037',
        recordedby: 'celso.mireles@gmail.com',
        note: "This is a note"
      },
      {
        timestamp: 'Fri Aug 28 2015 04:23:13 GMT-0700 (MST)',
        zip: '85037',
        recordedby: 'celso.mireles@gmail.com',
        note: "This is another note"
      },
      {
        timestamp: 'Fri Aug 28 2015 07:23:13 GMT-0700 (MST)',
        zip: '77023',
        recordedby: 'celso.mireles@gmail.com',
        note: "So cool!"
      }

    ]
  });

  bills.insert({
    serial: '4829892',
    denomination: '20',
    series: '2009',
    registeredby: 'elblue87@gmail.com',
    history: [
      {
        timestamp: '2015-08-23-02:22:23:31',
        zip: '85027',
        recordedby: 'celso.mireles@gmail.com',
        note: "This is a note"
      },
      {
        timestamp: '2015-08-25-02:22:23:31',
        zip: '85017',
        recordedby: 'celso.mireles@gmail.com',
        note: "Hooray!"
      },
      {
        timestamp: '2015-08-28-02:22:23:31',
        zip: '85004',
        recordedby: 'celso.mireles@gmail.com',
        note: "Sweet!"
      }

    ]
  });
}
