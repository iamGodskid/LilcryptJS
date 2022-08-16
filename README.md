# LilcryptJS
A Javascript encryption library

### download via github and reference in html 

```html
<script src="path/to/LilcryptJS/crypt.js"></script>
```

### Note
|| lilcrypt offers an encryption type[$$]
|| it takes a callback parameter where the result is returned

## USAGE

```javascript
//encrypting and decrypting

const x = new Crypt();
x.encrypt({
encryptType:"$$",
data: "lilcryptjs"
}, (data, err)=>{
if(err) throw(err);
console.log(data);
});

//decrypting
x.decrypt({
data: "$$q$$$$v$$$$~$$$$e$$$$v$$$$"
}, (data, err)=>{
if(err) throw(err);
console.log(data);
});

```
