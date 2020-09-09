function hemant(x, y, z) {
    return x + y + z;
  }
  
  console.log(hemant(...[1,2,3]))
  
  //add elements in of an existing array into a new array
  
  var names = ["ramesh", "rajesh"];
  var name2 = ["chandan", ...names, "and", "shuresh"]; 
  
  console.log(name2);
  
  //copy of an array
   var person =["hemant","kumar","saini"];
   var persion2 = [...person];
  persion2.push("sumitSani");
   console.log(person);
   console.log(persion2);
  
   //concate of array

   var a =["ram","ramesh"];
   var b = ["hemant","sumit"];
   var a = [...a,...b];
   console.log(a);

   //concate of array and add new element in array

   var p =["ram","ramesh"];
   var q = ["hemant","sumit"];
   var p = [...p,"trainingbasket",...q];
   console.log(p);
