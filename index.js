const axios = require('axios');
const {
   from,
   of ,
   interval
} = require('rxjs');
const {
   switchMap,
   map
} = require('rxjs/operators');
const url = `https://www.ticketsriverplate.com/services/UserService.svc/Who`;
const method = `post`
const cookie = `_ga=GA1.2.917366127.1536689008; _gid=GA1.2.1564424796.1539054993; ARRAffinity=0b9203a3bb1e4b3ce3599798a7f3766160387e28c4c7bfd485464db939fafe44; ASP.NET_SessionId=53vdts35phftqlijjpcrsa40; _gat_UA-64678642-4`

const axiosRequest = axios({
   method,
   url,
   cookie,
});

const request = from(axiosRequest).pipe(
   map(response => response.data)
);

request.subscribe(console.log)


// interval(5000).pipe(
//       switchMap(() => of ('sarasa'))
//    )
//    .subscribe(x => console.log(x))

// request
//    .then(response => response.data)
//    .then(x => console.log(x));