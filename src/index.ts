import type { App } from 'vue';

// components
import { Input } from './components/input/index';
import { TextArea } from './components/textarea/index';
import { Icon } from './components/icon/index';
import { Button, ButtonGroup } from './components/button/index';
import { Switch } from './components/switch/index';
import { Tooltip } from './components/tooltip/index';
import { Badge } from './components/badge/index';
import { Pagination } from './components/pagination/index';
import { Dropdown, DropdownItem } from './components/dropdown/index';
import { Avatar, AvatarGroup } from './components/avatar/index';
import { DatePicker } from './components/date-picker/index';
import { Spinner } from './components/spinner/index';
import { Carousel } from './components/carousel/index';
import { Divider } from './components/divider/index';
import {
    FloatingButton,
    FloatingItem,
} from './components/floating-button/index';
import { Modal } from './components/modal/index';
import { Accordion, AccordionGroup } from './components/accordion/index';

// fontawesome icon
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './fontawesome/index';

const components = [
    {
        name: 'c-input',
        value: Input,
    },
    {
        name: 'c-icon',
        value: Icon,
    },
    {
        name: 'c-button',
        value: Button,
    },
    {
        name: 'c-switch',
        value: Switch,
    },
    {
        name: 'c-tooltip',
        value: Tooltip,
    },
    {
        name: 'c-badge',
        value: Badge,
    },
    {
        name: 'c-pagination',
        value: Pagination,
    },
    {
        name: 'c-dropdown',
        value: Dropdown,
    },
    {
        name: 'c-dropdown-item',
        value: DropdownItem,
    },
    {
        name: 'c-button-group',
        value: ButtonGroup,
    },
    {
        name: 'c-avatar',
        value: Avatar,
    },
    {
        name: 'c-avatar-group',
        value: AvatarGroup,
    },
    {
        name: 'c-datepicker',
        value: DatePicker,
    },
    {
        name: 'c-spinner',
        value: Spinner,
    },
    {
        name: 'c-carousel',
        value: Carousel,
    },
    {
        name: 'c-divider',
        value: Divider,
    },
    {
        name: 'c-floating-button',
        value: FloatingButton,
    },
    {
        name: 'c-floating-item',
        value: FloatingItem,
    },
    {
        name: 'c-modal',
        value: Modal,
    },
    {
        name: 'c-accordion',
        value: Accordion,
    },
    {
        name: 'c-accordion-group',
        value: AccordionGroup,
    },
    {
        name: 'c-textarea',
        value: TextArea,
    },
];

const kyui3 = {
    install(app: App) {
        components.map((item) => {
            app.component(item.name, item.value);
        });
        app.component('f-icon', FontAwesomeIcon);
    },
};

export {
    Input,
    Icon,
    Button,
    Switch,
    Tooltip,
    Badge,
    Pagination,
    Dropdown,
    DropdownItem,
    ButtonGroup,
    Avatar,
    AvatarGroup,
    DatePicker,
    Spinner,
    Carousel,
    Divider,
    FloatingButton,
    FloatingItem,
    Modal,
    Accordion,
    AccordionGroup,
    TextArea,
    FontAwesomeIcon,
};

export default kyui3;
