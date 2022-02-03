# LilcryptJS
A small promise based Javascript encryption library

### download via github and reference in html 

```html
<script src="path/to/LilcryptJS/crypt.js"></script>
```

then you an now use...
#### note
Lilcrypt provides three major encryption modes...
And for now has no support for numeric encryption or decryption..




### hyper
### bios
### xor

## USAGE

```javascript
//encrypting and decrypting

const x = new Crypt();
x.encrypt("bios", {
data: "lilcryptjs"
})
.then(res=>{
console.log(res)
})

//decrypting
x.decrypt({
data: //encrypted data
})
.then(res=>{
console.log(res)
})

```
