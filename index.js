// console.log("het")

// let a=20;
// var b=20;
// const c=30;
// c=200
// console.warn(a+b+c);


// // == example
// var a='20';
// if(a===20)
// {
//     console.log("matched")
// }

// // === example
// var a='20';
// if(a===20)
// {
//     console.log("matched")
// }


// const app = require('./app')  
// // console.log(app.z())

// // filter method
// const arr =[4,7,2,5,8,3];
//  let result =arr.filter((item)=>{
//     return item>2
//     // console.log(item);
// })
// console.warn(result)


// const fs=require('fs');
// console.log("-->",__dirname)
// // fs.writeFileSync("hello2.txt","How are you every budy!!")
// // console.log("code step by step");


// const http = require('http');

// http.createServer((req,resp)=>{
//     resp.write("<h1>Hello this is abc</h1>");
//     resp.end();
// }).listen(4000);

// const http = require('http')
// const dataControl = (req,resp) =>
// {
//     resp.write("<h1>Hello How Are You</h1>");
//     resp.end();
// }

// http.createServer(dataControl).listen(31000)

// const http = require('http');
// function test(a)
// {
//     return a*10;
// }
// // const test = (a)=>a*100
// http.createServer((req,resp)=>{
//     resp.write("<h1>Hello this is abc</h1>");
//     resp.end();
// }).listen(31000);



// const color = require('colors');
// console.log("Het".black)

// const http = require('http');
// const data = require('./data')
// http.createServer((req,resp)=>{
//   resp.writeHead(200,{'content-type':'application\json'});
//   resp.write(JSON.stringify(data));
//   resp.end();
// }).listen(4200)

// const fs = require('fs');
// const input = process.argv;

// if(input[2]=='add')
// {
//     fs.writeFileSync(input[3],input[4])
// }else if(input[2]=='remove')
// {
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log("invalid input")
// }

                            // Display file list from folder
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'files');   
// // console.log(dirPath)
// // for(i=0;i<5;i++)
// // {
// //     fs.writeFileSync(dirPath+"/hello"+i+".txt","A simple text file")
// //     fs.writeFileSync(`hello${i}.txt`,"A simple text file")
// // }

// fs.readdir(dirPath,(err,files)=>{
//     // console.log(files)
//     files.forEach((item)=>{
//         console.log("file name is ", item)
//     })
// })


//  Asynchronous Programming Language

const fs = require('fs');
const path =require('path');
const dirPath = path.join(__dirname, 'curd');
const filePath = `${dirPath}/apple.txt`;

        // write file
// fs.writeFileSync(filePath,"this is an apple");

        // read file
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item)
// })

        // append file
// fs.appendFile(filePath,'and file name is apple.txt',(err)=>{
//     if(!err) console.log("file is updated")
// })

        // rename file
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("file is updated")
// })
                
        // delete file
// fs.unlinkSync(`${dirPath}/fruit.txt`)