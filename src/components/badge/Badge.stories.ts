import type { Meta, StoryObj } from '@storybook/vue3';

import Badge from '@/components/badge/Badge.vue';
// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'kyUI3/Badge',
    component: Badge,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        textValue: {
            description: '뱃지의 텍스트 필드',
            defaultValue: '',
        },
        size: {
            description: '뱃지의 사이즈',
            defaultValue: 'medium',
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
        variant: {
            description: '뱃지의 테마 색상',
            defaultValue: 'primary',
            control: 'select',
            options: ['primary', 'success', 'danger'],
        },
        rounded: {
            description: '둥근 뱃지',
            defaultValue: false,
        },
    },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    args: {
        textValue: 'badge',
        isPrimary: true,
        size: 'medium',
        rounded: false,
    },
};

export const Size: Story = {
    parameters: {
        docs: {
            source: {
                code: `
<c-badge v-bind='args' size="small"/>
<c-badge v-bind='args'/>
<c-badge v-bind='args' size="large"/>
`
            }
        }
    },
    render: (args) => ({
        components: { Badge },
        setup() {
            return { args };
        },
        template: 
        `<div class='button-group'>
            <Badge v-bind="args" size="small"></Badge>
            <Badge v-bind="args"></Badge>
            <Badge v-bind="args" size="large"></Badge>
        </div>`
    }),
    args: {
        textValue: 'badge',
        isPrimary: true,
        size: 'medium',
        rounded: false,
    },
};

export const Rounded: Story = {
    parameters: {
        docs: {
            source: {
                code: `
<c-badge v-bind='args' rounded/>
`
            }
        }
    },
    render: (args) => ({
        components: { Badge },
        setup() {
            return { args };
        },
        template: 
        `<Badge v-bind="args" rounded></Badge>`
    }),
    args: {
        textValue: 'badge',
        isPrimary: true,
        size: 'medium',
        rounded: true,
    },
};

export const Variant: Story = {
    parameters: {
        docs: {
            source: {
                code: `
<c-badge v-bind='args'/>
<c-badge v-bind='args' variant="success"/>
<c-badge v-bind='args' variant="danger"/>
`
            }
        }
    },
    render: (args) => ({
        components: { Badge },
        setup() {
            return { args };
        },
        template: 
            `<div class="button-group">
                <Badge v-bind="args"></Badge>
                <Badge v-bind="args" variant="success"></Badge>
                <Badge v-bind="args" variant="danger"></Badge>
            </div>`
    }),
    args: {
        textValue: 'badge',
        size: 'medium',
    },
};