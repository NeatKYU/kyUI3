import type { Meta, StoryObj } from '@storybook/vue3';

import FloatingButton from '@/components/floating-button/FloatingButton.vue';
import FloatingItem from '@/components/floating-button/FloatingItem.vue';
import Icon from '@/components/icon/Icon.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'kyUI3/FloatingButton',
    component: FloatingButton,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        color: {
            description: '플로팅 버튼 배경 색상',
            defaultValue: '#5e737d'
        },
        shape: {
            description: '플로팅 버튼 모양 circle, square 선택 가능합니다.',
            defaultValue: 'circle',
            control: 'select',
            options: ['circle', 'square'],
        }
    },
} satisfies Meta<typeof FloatingButton>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    parameters: {
        docs: {
            source: {
                code: `
<c-floating-button>
    <c-icon icon="pen-to-square"></c-icon>
    <template #menu>
        <c-floating-item @click="clickButton">4</c-floating-item>
        <c-floating-item>3</c-floating-item>
        <c-floating-item>2</c-floating-item>
        <c-floating-item>1</c-floating-item>
    </template>
</c-floating-button>
`
            }
        }
    },
    render: (args) => ({
        components: { FloatingButton, FloatingItem, Icon },
        setup() {
            return { args };
        },
        template: 
        `<div :style="{width: '360px', height: '640px', position: 'relative', border: '1px solid'}">
            <FloatingButton v-bind="args" :style="{position: 'absolute'}">
                <Icon icon="pen-to-square"></Icon>
                <template #menu>
                    <FloatingItem @click="clickButton">4</FloatingItem>
                    <FloatingItem>3</FloatingItem>
                    <FloatingItem>2</FloatingItem>
                    <FloatingItem>1</FloatingItem>
                </template>
            </FloatingButton>
        </div>`
    }),
    args: {
        color: '#5e737d',
        shape: 'circle',
    },
};
