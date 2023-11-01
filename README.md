<p align='center'>
    <font size="7">🌠 kyUI3 🌠</font>
</p>
<div align='center'>


[![NPM License](https://img.shields.io/npm/l/all-contributors.svg?style=flat)](https://github.com/NeatKYU/kyUI3/master/LICENSE)  [![NPM Version](https://img.shields.io/npm/v/kyui3.svg?style=flat)](//npmjs.com/package/kyui3)  [![NPM Downloads](https://img.shields.io/npm/dt/kyui3.svg?style=flat)](//npmjs.com/package/kyui3)  

👉 [kyUI3 storybook demo page](https://master--62f34ed2f44bd94b7764438f.chromatic.com) 📘 

</div>

# kyUI for Vue3.x
### UI component library for Vue3.x

<div align='center'>

![kyui3 sandbox](https://github.com/NeatKYU/kyUI3/assets/110021148/5878a578-4a91-421e-821f-700aa452323d)

</div>

## 🛠️ install
```
npm install kyui3
```

## 📖 Usage
```
// main.ts/js
import kyui3, { ComponentName } from 'kyui3';
import 'kyui/dist/style.css';
const app = createApp(App);

// regist all component & fontawesome icon tag
app.use(kyui3)

// regist one component
app.component('your-want-tag-name', ComponentName);
```

```
// in any vue file use like this
<your-want-tag-name/>
```

## 📑 Show Storybook Doc Page
🔗 [kyUI3 storybook page](https://master--62f34ed2f44bd94b7764438f.chromatic.com)
```
git clone https://github.com/NeatKYU/kyUI3.git
cd kyUI3
npm install
npm run storybook
```