
let stocks = {
    Fruits : ["strawberry" , "grapes" , "banana" , "apple" ],
    Holder : ["cone" , "cup" , "stick"],
    liquid : ['water' , "ice"],
    topings : ["chocolate" , "peanuts"],
}

let is_shop_open = true;
let order = (time , work)=>{

    return new Promise((resolve , reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work())
            },time)
        }else{
            reject(
                console.log("shop is closed")
            )
        }
    })
}

order(2000 , ()=>{console.log(`${stocks.Fruits[0]} was selected`)})

.then(()=>{
    return order(0000, ()=>{console.log("Production has started.")})
})


.then(()=>{
    return order(2000 , ()=>{console.log(`${stocks.Fruits[0]} was chopped.`)})
})

.then(()=>{
    return order (1000, ()=>{console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added.`)})
})

.then(()=>{
    return order(1000, ()=>{console.log("Machine was started.")})
})

.then(()=>{
    return order(2000, ()=>{
        console.log(`${stocks.Holder[1]} was selected`)
    })
})

.then(()=>{
    return order (3000, ()=>{
        console.log(`${stocks.topings[1]} were sprinkled`)
    })
})

.then(()=>{
    return order(1000,(console.log("Ice cream is ready to be served.")))
})

.catch(()=>{
    console.log("Customer left ")
})

.finally(()=>{
    console.log("Thank You for visiting us !!!")
})