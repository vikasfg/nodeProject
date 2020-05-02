console.log('start')
const greeter = (name,callback) =>{
    
   
    for(i=1;i<=999999999;i++)
    {
        if(i==999999999)
        i++;
    }
    callback('',i)

}

greeter('vikas',(err,data)=>{
    console.log(data)
})

console.log('end')
