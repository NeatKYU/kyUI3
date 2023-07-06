import type { Meta, StoryObj } from '@storybook/vue3';

import Tag from '@/components/tag/Tag.vue';
// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'kyUI3/Tag',
    component: Tag,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        textValue: {
            description: '태그의 텍스트 필드',
            defaultValue: '',
        },
        size: {
            description: '태그의 사이즈',
            defaultValue: 'medium',
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
        variant: {
            description: '태그의 테마 색상',
            defaultValue: 'primary',
            control: 'select',
            options: ['primary', 'success', 'danger'],
        },
        rounded: {
            description: '둥근 태그',
            defaultValue: false,
        },
    },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    args: {
        textValue: 'tag',
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
<c-tag v-bind='args' size="small"/>
<c-tag v-bind='args'/>
<c-tag v-bind='args' size="large"/>
`
            }
        }
    },
    render: (args) => ({
        components: { Tag },
        setup() {
            return { args };
        },
        template: 
        `<div class='button-group'>
            <Tag v-bind="args" size="small"></Tag>
            <Tag v-bind="args"></Tag>
            <Tag v-bind="args" size="large"></Tag>
        </div>`
    }),
    args: {
        textValue: 'tag',
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
<c-tag v-bind='args' rounded/>
`
            }
        }
    },
    render: (args) => ({
        components: { Tag },
        setup() {
            return { args };
        },
        template: 
        `<Tag v-bind="args" rounded></Tag>`
    }),
    args: {
        textValue: 'tag',
        isPrimary: true,
        size: 'medium',
        rounded: true,
    },
};

export const Theme: Story = {
    parameters: {
        docs: {
            source: {
                code: `
<c-tag v-bind='args'/>
<c-tag v-bind='args' variant="success"/>
<c-tag v-bind='args' variant="danger"/>
`
            }
        }
    },
    render: (args) => ({
        components: { Tag },
        setup() {
            return { args };
        },
        template: 
            `<div class="button-group">
                <Tag v-bind="args"></Tag>
                <Tag v-bind="args" variant="success"></Tag>
                <Tag v-bind="args" variant="danger"></Tag>
            </div>`
    }),
    args: {
        textValue: 'tag',
        size: 'medium',
    },
};