import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';

import { Modal } from '@/components/modal';
import { Button } from '@/components/button';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'kyUI3/Modal',
    component: Modal,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        isOpen: {
            description: '모달이 열리는걸 판단하는 변수',
            defaultValue: false,
        },
        title: {
            description: '모달의 타이틀',
            defaultValue: 'modal',
        }
    },
} satisfies Meta<typeof Modal>;

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
<div>
    <c-button @click="openModal">open modal</c-button>
    <c-modal :isOpen="isOpen" @close="closeModal">
    </c-mod>
</div>
`
            }
        }
    },
    render: (args) => ({
        components: {
            Modal,
            Button,
        },
        setup() {
            const isOpen = ref<boolean>(false);
            const openModal = () => {
                isOpen.value = !isOpen.value
            }
            const closeModal = () => {
                isOpen.value = false;
            }
            return { args, isOpen, openModal, closeModal };
        },
        template: `
            <div>
                <Button @click="openModal">open modal</Button>
                <Modal v-bind="args" :isOpen="isOpen" @close="closeModal">
                </Modal>
            </div>
        `
    }),
    args: {
        isOpen: false,
        title: 'modal'
    },
};

export const UseSlotsModal: Story = {
    parameters: {
        docs: {
            source: {
                code: `
<div>
    <c-button @click="openModal">open modal</c-button>
    <c-modal :isOpen="isOpen" title="use slot modal" @close="closeModal">
        <template #body>
            <div :style="{width: '100%', height: '100px', backgroundColor: '#f08080'}">this is body content</div>
        </template>
        <template #footer>
            <c-button @click="closeModal">close</c-button>
            <c-button @click="closeModal">execute</c-button>
        </template>
    </c-modal>
</div>
`
            }
        }
    },
    render: (args) => ({
        components: {
            Modal,
            Button,
        },
        setup() {
            const isOpen = ref<boolean>(false);
            const openModal = () => {
                isOpen.value = !isOpen.value
            }
            const closeModal = () => {
                isOpen.value = false;
            }
            return { args, isOpen, openModal, closeModal };
        },
        template: `
            <div>
                <Button @click="openModal">open modal</Button>
                <Modal v-bind="args" :isOpen="isOpen" @close="closeModal">
                    <template #body>
                        <div :style="{width: '100%', height: '100px', backgroundColor: '#f08080'}">this is body content</div>
                    </template>
                    <template #footer>
                        <Button @click="closeModal">close</Button>
                        <Button @click="closeModal">execute</Button>
                    </template>
                </Modal>
            </div>
        `
    }),
    args: {
        isOpen: false,
        title: 'use slot modal'
    },
};
