
let stocks = {
    Fruits : ["strawberry" , "grapes" , "banana" , "apple" ],
    Holder : ["cone" , "cup" , "stick"],
    liquid : ['water' , "ice"],
    topings : ["chocolate" , "peanuts"],
}

let is_shop_open = true;

function time(ms){
    return new Promise((resolve , reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms)
            
        }else{
            reject(console.log("shop is closed"))
        }
    })
}

async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.Fruits[1]} was selected`)

        console.log(`Production started`)

        await time(1000)
        console.log("cut the strawberry")
    }
    catch(error){
        console.log("customer left" , error)
    }
    finally{
        console.log('shop is closed')
    }
}

kitchen()