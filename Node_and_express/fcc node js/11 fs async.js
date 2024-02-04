const {readFile , writeFile} = require('fs')


readFile('D:/Microsoft Visual/Frontend/javascript/node js/content/first.txt' ,'utf8', (err,result)=>{
    if(err){
        console.log(err)
        return ;
    }else{
        console.log(result);
    }
})