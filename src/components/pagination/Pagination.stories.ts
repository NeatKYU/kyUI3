import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';

import Pagination from '@/components/pagination/Pagination.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'kyUI3/Pagination',
    component: Pagination,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        totalCount: {
            description: '게시물 전체 개수',
            defaultValue: 0,
        },
        perPage: {
            description: '게시물 몇개씩 보여줄지 정하는 변수',
            defaultValue: 10,
        },
        showPage: {
            description: '페이지네이션 버튼 개수 몇개씩 보일건지 세팅할 변수',
            defaultValue: 10,
        },
        currentPage: {
            description: '현재 페이지',
            defaultValue: 1,
        },
        rounded: {
            description: '버튼 둥근 스타일',
            defaultValue: false,
        },
        isEndButton: {
            description: '맨뒤, 맨앞으로 이동하는 버튼 여부',
            defaultValue: false,
        },
    },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    render: (args) => ({
        components: {
            Pagination,
        },
        setup() {
            const currentPage = ref(1);
            const changePage = (page: number) => {
                currentPage.value = page;
            }
            return { args, changePage };
        },
        template: `
            <Pagination v-bind="args" @changePage="changePage"></Pagination>
        `,
    }),
    args: {
        totalCount: 255,
        perPage: 10,
        showPage: 10,
        currentPage: 1,
        rounded: false,
        isEndButton: false,
    },
};