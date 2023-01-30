import type { App } from 'vue';
import { Input } from './components/input/index';
import { Icon } from './components/icon/index';

import './fontawesome/index';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const components = [
    {
        name: 'c-input',
        value: Input,
    }, {
        name: 'c-icon',
        value: Icon
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

    FontAwesomeIcon,
}

export default kyui3;