# kyUI for Vue3.x
Vue3.x를 위한 컴포넌트 라이브러리

### install
```
npm install kyui3
```

### Usage
```
// main.ts/js
import kyui3, { Input } from 'kyui3';
import 'kyui/dist/style.css';
const app = createApp(App);

// regist fontawesome icon tag
app.use(kyui3)

// regist Input component
app.component('your-want-tag-name', Input);
```

```
// in any vue file use like this
<your-want-tag-name/>
```