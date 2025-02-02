const fs = require('fs');
fs.readFile('./a.txt' , 'utf-8' , (err,data) => {
  if(err) {
    console.log(err)
  }
  else {
    fs.readFile('./b.txt' , 'utf-8' , (err,data) => {
      if(err) {
        console.log(err)
      }
      else {
        fs.readFile('./c.txt' , 'utf-8' , (err,data) => {
          if(err) {
            console.log(err);
          }
          else {
            console.log("All the Files have been read successfully");
          }
        })
      }
    })
  }
})

const content = fs.readFileSync('./a.txt', 'utf-8');
console.log(content);
function readFileAsync() {
  const content2 = fs.readFile('./b.txt', 'utf-8', (err,content2) => {
    if (err) {
      console.log("Error");
    }
    else {
      console.log(content2);
    }
  }) }
setTimeout(readFileAsync, 5000)

