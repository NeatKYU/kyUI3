import type { Meta, StoryObj } from '@storybook/vue3';

import Tooltip from '@/components/tooltip/Tooltip.vue';
import Button from '@/components/button/Button.vue';
// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'kyUI3/Tooltip',
    component: Tooltip,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        text: {
            description: '툴팁에 나타낼 텍스트 필드',
            defaultValue: '',
        },
        rounded: {
            description: '둥글 툴팁',
            defaultValue: false,
        },
        animated: {
            description: '툴팁에 fade 애니메이션 효과 부여',
            defaultValue: true,
        },
        isRight: {
            description: '오른쪽으로 툴팁이 나타남',
            defaultValue: false,
        },
        isLeft: {
            description: '왼쪽으로 툴팁이 나타남',
            defaultValue: false,
        },
        isBottom: {
            description: '아래쪽으로 툴팁이 나타남',
            defaultValue: false,
        },
    },
} satisfies Meta<typeof Tooltip>;

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
<c-tooltip>
    <c-button>툴팁</c-button>
</c-tooltip>
`
            }
        }
    },
    render: (args) => ({
        components: { Tooltip, Button },
        setup() {
            return { args };
        },
        template: 
            `<div :style="{width: '100%', height: '10rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}">
                <Tooltip v-bind="args">
                    <Button>tooltip</Button>
                </Tooltip>
            </div>`
    }),
    args: {
        text: '툴팁 입니다.',
        animated: true,
        rounded: false,
        isRight: false,
        isLeft: false,
        isBottom: false,
    },
};

export const Direction: Story = {
    parameters: {
        docs: {
            source: {
                code: `
<c-tooltip v-bind='args'><c-button>기본 툴팁</c-button></c-tooltip>
<c-tooltip v-bind='args' isBottom><c-button>바텀 툴팁</c-button></c-tooltip>
<c-tooltip v-bind='args' isRight><c-button>오른쪽 툴팁</c-button></c-tooltip>
<c-tooltip v-bind='args' isLeft><c-button>왼쪽 툴팁</c-button></c-tooltip>
`
            }
        }
    },
    render: (args) => ({
        components: { Tooltip, Button },
        setup() {
            return { args };
        },
        template: 
        `<div class='button-group'>
            <Tooltip v-bind="args"><Button>기본</Button></Tooltip>
            <Tooltip v-bind="args" isBottom><Button>바텀</Button></Tooltip>
            <Tooltip v-bind="args" isRight><Button>오른쪽</Button></Tooltip>
            <Tooltip v-bind="args" isLeft><Button>왼쪽</Button></Tooltip>
        </div>`
    }),
    args: {
        text: '툴팁 입니다.',
        animated: true,
        rounded: false,
    },
};
