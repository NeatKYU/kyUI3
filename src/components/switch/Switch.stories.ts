import type { Meta, StoryObj } from '@storybook/vue3';

import Switch from '@/components/switch/Switch.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'kyUI3/Switch',
    component: Switch,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        size: {
            description: '스위치 크기',
            control: 'select',
            options: [
                'small',
                'medium',
                'large',
            ],
        }
    },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    args: {
        size: 'medium'
    },
};

export const SizeSwitch: Story = {
    parameters: {
        docs: {
            source: {
                code: `
<c-switch v-bind='args' size="small"/>
<c-switch v-bind='args'/>
<c-switch v-bind='args' size="large"/>
`
            }
        }
    },
    render: (args) => ({
        components: { Switch },
        setup() {
            return { args };
        },
        template: 
        `
        <div class="button-group">
            <Switch v-bind="args" size="small"/>
            <Switch v-bind="args"/>
            <Switch v-bind="args" size="large"/>
        <div>
        `
    }),
};
