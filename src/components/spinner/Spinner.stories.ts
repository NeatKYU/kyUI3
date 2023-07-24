import type { Meta, StoryObj } from '@storybook/vue3';

import Spinner from '@/components/spinner/Spinner.vue';
// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'kyUI3/Spinner',
    component: Spinner,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        color: {
            description: '스피너 색상',
            defaultValue: '#c2c2c2',
        },
        size: {
            description: '스피너 크기',
            defaultValue: 'medium',
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
        speed: {
            description: '스피너 애니메이션 속도',
            defaultValue: '1s',
        }
    },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    args: {
        color: '#c2c2c2',
        size: 'medium',
        speed: '1s',
    },
};

export const Size: Story = {
    parameters: {
        docs: {
            source: {
                code: `
<c-spinner v-bind='args' size="small"/>
<c-spinner v-bind='args'/>
<c-spinner v-bind='args' size="large"/>
`
            }
        }
    },
    render: (args) => ({
        components: { Spinner },
        setup() {
            return { args };
        },
        template: 
        `<div class='button-group'>
            <Spinner v-bind="args" size="small"></Spinner>
            <Spinner v-bind="args"></Spinner>
            <Spinner v-bind="args" size="large"></Spinner>
        </div>`
    }),
    args: {
        color: '#c2c2c2',
        size: 'medium',
        speed: '1s',
    },
};

