function recall(){
    var Fullname = document.getElementById("name").value
    var mail = document.querySelector('#email').value
    var user = document.querySelector('#username').value
    var pass = document.querySelector('#password').value
      document.writeln("Name = "+Fullname+' Email = '+mail+" Username = "+user+" Password = "+pass)

      // const createCsvWriter = require('csv-writer').createObjectCsvWriter;
      //    const csvWriter = createCsvWriter({
      //     path: 'data.csv',
      //     header: [
      //         {id: 'Fullname', title: 'NAME'},
      //         {id: 'mail', title: 'Email'},
      //         {id: 'user', title: 'Username'},
      //         {id: 'pass', title: 'Password'},
      //     ]
      //     });
      // const records = [
      //     // {Fullname: Fullname,  mail: mail},
      //     {Fullname: 'Mary', mail: 'English'}
      //    ];
       
      // csvWriter.writeRecords(records)       // returns a promise
      //     .then(() => {
      //         console.log('...Done');
      //  });
      
}


