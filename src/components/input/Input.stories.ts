import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';

import Input from '@/components/input/Input.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'kyUI3/Input',
    component: Input,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        type: {
            description: '인풋의 스타일에 적용되는 `type`',
            defaultValue: 'text',
            control: 'select',
            options: [
                'text',
                'textarea',
                'email',
                'phone',
            ]
        },
        placeholder: {
            description: '인풋 placeholder',
            defaultValue: 'input',
        },
        isValidate: {
            description: '인풋에 입력한 값이 유효한 값인지 체크할지 말지 정하는 변수',
            default: true,
        },
        disabled: {
            description: '인풋을 disable처리 합니다.',
            defaultValue: false,
        },
        leftIcon: {
            description: '인풋 왼쪽 아이콘',
            defaultValue: '',
            control: 'select',
            options: ['star', 'align-justify'],
            table: {
                category: 'Icon',
            },
        },
        rightIcon: {
            description: '인풋 오른쪽 아이콘',
            defaultValue: '',
            control: 'select',
            options: ['star', 'align-justify'],
            table: {
                category: 'Icon',
            },
        },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const inputValue = ref('');
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    render: (args) => ({
        components: {
            Input,
        },
        setup() {
            const value = ref('');
            return { args, value };
        },
        template: `
            <Input v-bind="args" v-model="value"></Input>
        `
    }),
    args: {
        type: 'text',
        placeholder: 'input',
        isValidate: true,
        disabled: false,
    },
};