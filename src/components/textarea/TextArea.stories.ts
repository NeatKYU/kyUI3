import type { Meta, StoryObj } from '@storybook/vue3';

import TextArea from '@/components/textarea/TextArea.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'kyUI3/TextArea',
    component: TextArea,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        placeholder: {
            description: 'textarea placeholder',
            defaultValue: 'textarea',
        },
        disabled: {
            description: 'textarea를 disable처리 합니다.',
            defaultValue: false,
        },
        label: {
            description: 'textarea 라벨',
            defaultValue: '',
        },
        rows: {
            description: 'textarea의 최대 라인 수',
            defaultValue: 5,
        },
        maxLength: {
            description: 'textarea의 최대 글자 수',
            defaultValue: 500,
        },
        isResize: {
            description: 'textarea의 리사이즈 여부 (수직으로만 가능)',
            defaultValue: false,
        },
    },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    args: {
        placeholder: 'textarea',
        disabled: false,
        rows: 3,
        maxLength: 500,
        isResize: true,
    },
};
