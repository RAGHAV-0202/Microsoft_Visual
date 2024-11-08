import mongoose from "mongoose";
import  Products  from "../src/models/Products.models.js";

// Import your product data
import data from "../src/data/data.js"

import dotenv from "dotenv"
dotenv.config()





// Change Broad Category first
// LINE 59



const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const importData = async () => {
  try {
    for(var i = 0 ; i < data.length ; i++){
        var swatch = []; 
      
      for (var j = 0; j < data[i].rgbColors.length; j++) {
        swatch.push({
          colorCode: data[i].rgbColors[j], 
          colorName: data[i].articleColorNames[j],  
        });
      }

      const product = {
        articleCode : data[i].articleCodes[0] , 
        title : data[i].name , 
        category : data[i].mainCategoryCode ,
        image : [
          {
            src : data[i].galleryImages[0]?.url,
            dataAltImage : data[i].galleryImages[1]?.url , 
            alt : "Product Image" , 
            dataAltText : "Product Alt Image"
          }
        ], 
        price : data[i].price.formattedValue ,
        swatches :  swatch, 
        brandName : "H&M" , 
        // broadCategory : "Home" 
      }
      await Products.create(product);

      // console.log(product)
      
    }
    console.log('Data Imported!');
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};

const run = async () => {
  await connectDB();
  await importData();
};

run();
