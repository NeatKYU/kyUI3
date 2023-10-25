import type { Meta, StoryObj } from '@storybook/vue3';

import Carousel from '@/components/carousel/Carousel.vue';
// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'kyUI3/Carousel',
    component: Carousel,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        width: {
            description: '캐러셀의 넓이',
            defaultValue: 300,
        },
        height: {
            description: '캐러셀의 높이',
            defaultValue: 300,
        },
        images: {
            description: '이미지 리스트',
            defaultValue: [] as string[],
        },
        showIndicator: {
            description: '캐러셀의 dot navigation 사용 여부',
            defaultValue: true,
        },
        showArrow: {
            description: '캐러셀의 button navigation 사용 여부',
            defaultValue: true,
        },
        autoPlay: {
            description: '캐러셀 자동 진행 여부',
            defaultValue: false,
        },
        interval: {
            description: '자동 진행 시 진행 시간',
            defaultValue: 3,
        },
    },
} satisfies Meta<typeof Carousel>;

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
<c-carousel v-bind="args" :images="images"/>
`
            }
        }
    },
    args: {
        width: 300,
        height: 300,
        showIndicator: true,
        showArrow: true,
        autoPlay: false,
        images: ['https://fakeimg.pl/250', 'https://fakeimg.pl/200', 'https://fakeimg.pl/300'],
    },
};

export const AutoPlay: Story = {
    parameters: {
        docs: {
            source: {
                code: `
<c-carousel v-bind="args" :images="images" autoPlay :interval="3"/>
`
            }
        }
    },
    args: {
        width: 300,
        height: 300,
        showIndicator: true,
        showArrow: true,
        autoPlay: true,
        interval: 3,
        images: ['https://fakeimg.pl/250', 'https://fakeimg.pl/200', 'https://fakeimg.pl/300'],
    },
};
