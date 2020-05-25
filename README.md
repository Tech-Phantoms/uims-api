# uims-api
 uims api written in javascript 


This library is inspired by [https://github.com/cu-unofficial/uims-api](https://github.com/cu-unofficial/uims-api) created by [ritiek](https://github.com/ritiek) .


## Main Idea 

Cuurently what this library does is takes `uid` and `password` and returns that the user is legit or not. 
doesent store the uid or password in any way. 

## Documentation 

```javascript 
const Api = require('uims-api')

let api = new Api()

api.connect({
    uid: 'users uid',
    password: 'users Password'
}).then(res => {
    console.log(res) // true or false
}).catch(err => {
    console.log(err)
})

```
