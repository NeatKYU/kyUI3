import type { Meta, StoryObj } from '@storybook/vue3';

import DatePicker from '@/components/date-picker/DatePicker.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'kyUI3/DatePicker',
    component: DatePicker,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        width: {
            description: 'datepicker의 넓이를 조절합니다.',
            defaultValue: 300,
        },
        height: {
            description: 'datepicker의 높이를 조절합니다.',
            defaultValue: 'auto',
        },
        isKor: {
            description: 'datepicker 한글 모드 여부',
            defaultValue: false,
        },
    },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    args: {
        isKor: false,
    },
};

export const KoreanDatepicker: Story = {
    parameters: {
        docs: {
            source: {
                code: `
<c-datepicker v-bind='args' isKor></c-datepicker>
`
            }
        }
    },
    render: (args) => ({
        components: { DatePicker },
        setup() {
            return { args };
        },
        template: 
        `<DatePicker v-bind='args' isKor></DatePicker>`
    }),
    args: {
        isKor: true,
    },
};
