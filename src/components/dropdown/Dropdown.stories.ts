import type { Meta, StoryObj } from '@storybook/vue3';

import Dropdown from '@/components/dropdown/Dropdown.vue';
import DropdownItem from '@/components/dropdown/DropdownItem.vue';
import Button from '@/components/button/Button.vue';
import Avatar from '@/components/avatar/Avatar.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'kyUI3/Dropdown',
    component: Dropdown,
    // setting docs preview height
    parameters: {
        docs: {
            story: {
                inline: false,
                iframeHeight: 150,
            },
        },
    },
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        dropdownCustomClass: {
            description: '드롭다운의 스타일을 조절할 수 있는 클래스',
            defaultValue: '',
        },
        hovered: {
            description: '드롭다운의 마우스 오버시 아이템 창이 열리는 모드',
            defaultValue: false,
        },
    },
} satisfies Meta<typeof Dropdown>;

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
                code: `<c-dropdown>
    <template v-slot:trigger>
        <c-button right-icon='caret-down'>
            select
        </c-button>
    </template>
    <template v-slot:item>
        <c-dropdown-item>
            프로필
        </c-dropdown-item>
        <c-dropdown-item>
            로그아웃
        </c-dropdown-item>
    </template>
</c-dropdown>`
            }
        }
    },
    render: (args) => ({
        components: {
            Dropdown,
            DropdownItem,
            Button,
        },
        setup() {
            return { args };
        },
        template: `
            <Dropdown v-bind="args">
                <template v-slot:trigger>
                    <Button right-icon='caret-down'>
                        select
                    </Button>
                </template>
                <template v-slot:item>
                    <DropdownItem>
                        프로필
                    </DropdownItem>
                    <DropdownItem>
                        로그아웃
                    </DropdownItem>
                </template>
            </Dropdown>
        `
    }),
    args: {
        dropdownCustomClass: '',
        hovered: false,
    },
};

export const HoverdDropdown: Story = {
    parameters: {
        docs: {
            source: {
                code: `<c-dropdown hovered>
    <template v-slot:trigger>
        <c-button right-icon='caret-down'>
            select
        </c-button>
    </template>
    <template v-slot:item>
        <c-dropdown-item>
            프로필
        </c-dropdown-item>
        <c-dropdown-item>
            로그아웃
        </c-dropdown-item>
    </template>
</c-dropdown>`
            }
        }
    },
    render: (args) => ({
        components: {
            Dropdown,
            DropdownItem,
            Button,
        },
        setup() {
            return { args };
        },
        template: `
            <Dropdown v-bind="args">
                <template v-slot:trigger>
                    <Button right-icon='caret-down'>
                        select
                    </Button>
                </template>
                <template v-slot:item>
                    <DropdownItem>
                        프로필
                    </DropdownItem>
                    <DropdownItem>
                        로그아웃
                    </DropdownItem>
                </template>
            </Dropdown>
        `
    }),
    args: {
        dropdownCustomClass: '',
        hovered: true,
    }
}