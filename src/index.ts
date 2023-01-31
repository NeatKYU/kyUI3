import type { App } from 'vue';

// components
import { Input } from './components/input/index';
import { Icon } from './components/icon/index';
import { Button } from './components/button';
import { Switch } from './components/switch';

// fontawesome icon
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './fontawesome/index';

const components = [
    {
        name: 'c-input',
        value: Input,
    }, {
        name: 'c-icon',
        value: Icon
    }, {
        name: 'c-button',
        value: Button
    }, {
        name: 'c-switch',
        value: Switch
    }
]

const kyui3 = {
    install(app: App) {
        components.map((item) => {
            app.component(item.name, item.value)
        })
        app.component('f-icon', FontAwesomeIcon)
    }
}

export {
    Input,
    Icon,
    Button,
    Switch,

    FontAwesomeIcon,
}

export default kyui3;