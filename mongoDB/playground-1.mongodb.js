use('mongodbVSCodePlaygroundDB');

db.test.find({
    $and : [
        {$or : [
            {"age" : {$gt : 18}},
            {"age" : {$lte : 16}}
        ]},
        {phone_no : 9999999999}
    ]
} , {name : 1 , age : 1 , _id : 0})





