const express = require('express')//thu vien
const app = express()
const port = 3000

//định nghĩa  = route
//khi đi vào trang chủ sẽ return ra 1 res.send~ trả về trình duyệ 1 chuối 
app.get('/login', (req, res) => {
    var a = 1;
    var b = 2;
     var c = a + b;
  res.send('Hello World!')
})
//app khởi tạo từ express và sẽ lắng nghe cổng 3000
//ip: 127.0.0.1 - local host
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})