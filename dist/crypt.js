var Crypt=(function(){
  "use strict";
  this.encrypted= [];
  this.concatted = [];

  this.decrypted=[];
  this.encryptmode = ["hyper", "bios", "xor"];
  this.parsed = {};
  
  this.encrypt=(m, opt)=>{
  
    if(!m && !opt) console.warn("encrypt method requires atleast two parameters");
    if(m === undefined ||opt === undefined) throw Error("undefined expressions in parameter");
    if(!m || !opt) throw Error("one parameter given, two required");
    else{
      
      let mode = m;
      let data = opt.data;
     if(typeof data === "function") throw Error("function not accepted as encryptable")
     
       if(this.encryptmode.includes(mode) == true){
        
        return new Promise(encr=>{
        const en = this.encryptor(data, mode);
        encr(en);
        })
       
        
      }
    
      
    }
  } 
  
  this.decrypt=(opts)=>{
  
    if(!opts) console.warn("decrypt method requires atleast one parameters");
    if(typeof opts === undefined) throw Error("undefined expressions in parameter");
    if(!opts) throw Error("null params given");
    else{


      let dataa = opts.data;
     if(typeof dataa === "function") throw Error("function not accepted as encryptable")
      
        return new Promise(decr=>{
        const n = this.decryptor(dataa);
        decr(n);
        })
       
        
      }
    
      
    }
    

  const label = {
    "a":'1',
    "b":'2',
    "c":'3',
    "d":'4',
    "e":'5',
    "f":'6',
    "g":'7',
    "h":'8',
    "i":'9',
    "j":'@',
    "k":'!',
    "l":'~',
    "m":'#',
    "n":'%',
    "o":'^',
    "p":'*',
    "q":'&',
    "r":')',
    "s":'0',
    "t":'{',
    "u":'-',
    "v":'=',
    "w":']',
    "x":'.',
    "y":"?",
    "z":"<",
  };
  const delabel = {
    "1":"a",
    "2":"b",
    "3":"c",
    "4":"d", 
    "5":'e',
    "6":'f',
    "7":'g',
    "8":'h',
    "9":'i',
    "@":'j',
    "!":'k',
    "~":'l',
    "#":'m',
    "%":'n',
    "^":'o',
    "*":'p',
    "&":'q',
    ")":'r',
    "0":'s',
    "}":'t',
    "-":'u',
    "=":'v',
    "]":'w',
    ".":'x',
    "?":"y",
    "<":"z",
  }
const breaker = [];
const done = [];
  this.decryptor=(op)=>{
    const checkreg = /bios/gi;
    const checkr = /hyper/gi;
    const checkre = /xor/gi;
    const seperator = new RegExp(/,/gi);
    const regs = [checkreg, checkr, checkre];
    const dec = op;
    //check if encryptor in text
    
    for(const reg of regs){
   if(reg.test(dec) === true){
     const rep = dec.replace(reg, ",");
     console.log(reg.test(dec));
     breaker.push(rep);

     console.log(breaker)
   }

//converting to text

const don = [];

for(const con of breaker){
  if(seperator.test(con)===true){
    const repl = con.replace(seperator, " ");
  for(var t of repl){
    if(t in delabel){
     const converted = t = delabel[t];
     don.push(converted);
    }
  }
  let parse = don.reduce((r, d)=>r+d).trim();
  console.log(parse)
  done.push(parse);
  return done;
  }
}


  }
  }

  this.encryptor=(d, mo)=>{
    
const dt = d;
const regExp = /\s/;
dt.slice(regExp);
for(var i of dt){
  if(i in label){
i = label[i];
  }
const join = i.concat(mo);
this.concatted.push(join);
}
let fin =this.concatted.reduce((a,b)=>a+b);
let final = mo+fin;
  this.encrypted.push(final);
  return this.encrypted;


  }
  
})