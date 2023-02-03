const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/personDB",{useNewUrlParser:true})
const personSchema= new mongoose.Schema({
    name:String,
    age:Number
})
mongoose.set('strictQuery',true);
const Person=mongoose.model("Person",personSchema);

const person1=new Person({
    name: "Abeed",
    age:18
})
const person2=new Person({
    name:"John",
    age:37
})
// person1.save();
// person2.save();
Person.find(function(err,persons){
    if(err){
        console.log(err);
    }
    else{
        mongoose.connection.close();
        persons.forEach(function(person){
            console.log(person.name);  
        })
    }
})
Person.updateOne({name:"Abeed"},{age:3943},function(err){
    if(err){
        console.log(err)
    }else {
        console.log("Successful!");
    }
})
