
var Crypt=(function(){
 "use strict";
let caches = {
    " ": "~",
    "a":"z",
    "b":"y",
    "c":"x",
    "d":"w",
    "e": "v",
    "f":"u",
    "g": "t",
    "h":"s",
    "i":"r",
    "j":"q",
    "k":"p",
    "l":"o",
    "m":"n",
    "n":"m",
    "o":"l",
    "p":"k",
    "q":"j",
    "r":"i",
    "s":"h",
    "t":"g",
    "u":"f",
    "v":"e",
    "w":"d",
    "x":"c",
    "y":"b",
    "z":"a"
  }
  let caches_space={
    " ": "~",
    "~": " "
  }
let avail_encrypt=["$$"];
 
 this.encrypt=function(param, callback){
let $this=param;
try{
  if(typeof($this) !== "object"){
   return callback("", "typeof param[1] is not object")
  }
}catch(err){
  console.warn(err)
}
  let $$ = $this.encryptType;
  
  let data;
  data = $this.data.toLowerCase();
  
  let reversable = "";
  let result=[];
  
  
  //proceed to process
  if(avail_encrypt.includes($$) == false) return callback("", "encryptType not supported");
  let karr=[]
  data.split("").forEach(key_in=>{
  //let karr=[];
 // karr.push(key_in)
 // karr.reverse();
 // for(var i=0;i<karr.length;i++){
  let hold;
   if(key_in in caches){
    hold = $$+caches[key_in]+$$;
}else if(/\W/gim.test(key_in)==true){
  hold = $$+key_in+$$;
}else if(/\d/gim.test(key_in)==true){
  hold=$$+key_in+$$;
}
  // callback(hold, '')
   reversable+=hold;
  // reversable.reverse();
  result.push(reversable)
  result.reverse()
   
  // callback(karr, "")
  })
return  callback(result[0], "")
  
  
  
  /*
  callback=function(d, e){
    let ret = d || e;
    if(d !== "null"){
      return d;
    }else if(e !== "null"){
      return e;
    }else{
    }
    }*/
}

this.decrypt=function(decr, callback){
  try{
  if(typeof(decr)!=="string"){
    return callback("", "typeof param[1] in decrypt not defined")
  }
  }catch(err){
    
  }
  let $$this = decr;
 let regstripper = /\$/gi;
 let feedback = "";
 let stripped = $$this.replace(regstripper, "");
 callback(stripped, "");
 let dex;
 stripped.split("").forEach(key_out=>{
   if(key_out in caches || key_out in caches_space){
      dex = caches[key_out] || caches_space[key_out];
   }else if(/\W/gim.test(key_out)==true){
     dex=key_out;
   }else if(/\d/gim.test(key_out)==true){
     dex=key_out;
   }
     feedback+= dex;
     
   
 })
   callback(feedback, "")
 
  
  
}
})