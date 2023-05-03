# Control of expenses

It is a cost control, where it is possible for the user to do the CRUD of the transaction, which will be stored in localstorage.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [How to run the code](#How-to-run-the-code)
- [Author](#author)

## Overview

### Screenshot

![tablet](https://user-images.githubusercontent.com/112407769/235823919-400c2351-7841-41e5-b436-dc04c361d1c3.png)
![mobile phone](https://user-images.githubusercontent.com/112407769/235824022-64501a44-4294-414e-ba0d-18cd4aa595d5.png)




## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- javascript
- mobile first
- localstorage
- [Bootstrap](https://icons.getbootstrap.com/) - icons



### What I learned


```html
<!--I can create modals more easily-->
<dialog class="modal-alert hidden">...
  ```
```css
/*can i make the scroll appear*/
.question{
  overflow:auto;
}
```
```js
//Can I remove an event listener
save_btn.removeEventListener("click", handleClick)
```

### Continued development

```
Mobile first, clean code, refactoring, localstorage.
```


### Useful resources                  alterar descriçoes!!!!!

- [Bootstrap](https://getbootstrap.com/) - used for icons and alerts.


### How to run the code? 


you can download it to your machine and open the index.html in the code editor.
If you get a Json error due to local storage, comment out lines 26-37 of script.js and add below line 37: 

let data_transactions =[
        { id: 1, description: "salário", amount: 3000, date: "01-11-2022" },
        { id: 3, description: "lanche", amount: -70, date: "10-04-2023" },
    ]

Note that this is a local storage bug with Chrome, so by doing this your app will not work on local storage.

If you want to test the app without downloading the code:
https://control-of-expenses.vercel.app/

 :)
## Author

- LinkdIn - Alexandre Mariano(https://www.linkedin.com/in/alexandresouza31/)
