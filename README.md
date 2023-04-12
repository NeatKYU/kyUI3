# kyUI for Vue3.x
Vue3.x를 위한 컴포넌트 라이브러리

### install
```
npm install kyui3
```

### Usage
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

### Show Storybook Doc Page
```
git clone https://github.com/NeatKYU/kyUI3.git
cd kyUI3
npm install
npm run storybook
```