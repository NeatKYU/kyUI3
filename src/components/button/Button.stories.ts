import type { Meta, StoryObj } from '@storybook/vue3';

import Button from '@/components/button/Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'kyUI3/Button',
    component: Button,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        type: {
            description: '버튼의 스타일에 적용되는 `type`',
            control: null,
        },
        label: {
            description: '버튼에 들어가는 내용입니다. `children`으로 넣어줘도 되지만 `label`속성에 넣어주어도 무관합니다.',
            defaultValue: 'Button',
        },
        size: {
            description: '버튼의 크기를 조절합니다. `small` `medium` `large`가 있습니다.',
            defaultValue: 'medium',
            control: 'select',
            options: [
                'small',
                'medium',
                'large',
            ],
        },
        tag: {
            description: '버튼을 감싸는 `div`를 설정해줍니다. 기본적으로 `button`으로 설정되고 `a` `link`등등 다양합니다.',
            defaultValue: 'button',
            control: 'select',
            options: [
                'a',
                'button',
                'input',
                'router-link',
                'nuxt-link',
                'n-link',
                'RouterLink',
                'NuxtLink',
                'NLink',
            ],
        },
        primary: {
            description: '버튼에 `primary`색상을 입힙니다.',
            defaultValue: false,
        },
        rounded: {
            description: '둥근 버튼으로 만들어줍니다.',
            defaultValue: false,
        },
        disabled: {
            description: '`button`태그의 `disabled` 속성입니다.',
            defaultValue: false,
        },
        leftIcon: {
            description: '버튼 왼쪽 아이콘',
            defaultValue: '',
            control: 'select',
            options: ['star', 'angle-left'],
            table: {
                category: 'Icon',
            },
        },
        rightIcon: {
            description: '버튼 오른쪽 아이콘',
            defaultValue: '',
            control: 'select',
            options: ['star', 'angle-right'],
            table: {
                category: 'Icon',
            },
        },
        isIconButton: {
            description: '버튼이 아이콘 버튼 모양으로 변합니다.',
            defaultValue: false,
            table: {
                category: 'Icon',
            }
        },
        icon: {
            description: '아이콘 버튼일때 사용할 아이콘',
            defaultValue: 'star',
            table: {
                category: 'Icon'
            }
        },
        animation: {
            description: '물결 무늬 애니메이션 효과',
            defaultValue: false,
        },
        full: {
            description: '가로 길이 최대치로 설정',
            defaultValue: false,
        },
        outlined: {
            description: 'outline 효과 여부',
            defaultValue: false,
        }
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    args: {
        primary: true,
        label: 'Button',
        size: 'medium',
        tag: 'button',
        disabled: false,
        rounded: false,
        animation: false,
        full: false,
        outlined: false,
        isIconButton: false,
    },
};

export const SizeButton: Story = {
    render: (args) => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: 
        `<div class='button-group'>
            <Button v-bind="args" size="small"></Button>
            <Button v-bind="args"></Button>
            <Button v-bind="args" size="large"></Button>
        </div>`
    }),
    args: {
        primary: true,
        label: 'Button',
    },
};

export const FullMode: Story = {
    args: {
        primary: true,
        label: 'Button',
        full: true,
    },
};

export const IconButton: Story = {
    render: (args) => ({
        components: { Button },
        setup() {
            return { args };
        },
        template: 
        `<div class='button-group'>
            <Button v-bind='args' leftIcon='angle-left'></Button>
            <Button v-bind='args' rightIcon='angle-right'></Button>
            <Button v-bind='args' isIconButton icon='star'></Button>
        </div>`
    }),
    args: {
        primary: true,
        label: 'Icon',
        leftIcon: '',
        rightIcon: '',
        isIconButton: false,
        icon: '',
    }
}

export const OutlineButton: Story = {
    args: {
        label: 'Outlined',
        outlined: true,
    }
}

export const RoundButton: Story = {
    args: {
        primay: true,
        label: 'Rounded',
        rounded: true,
    }
}
