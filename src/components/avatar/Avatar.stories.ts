import type { Meta, StoryObj } from '@storybook/vue3';

import Avatar from '@/components/avatar/Avatar.vue';
import AvatarGroup from '@/components/avatar/AvatarGroup.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'kyUI3/Avatar',
    component: Avatar,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        rounded: {
            description: '아바타 컴포넌트를 둥글게 만들어 줍니다.',
            defaultValue: true,
        },
        size: {
            description: '아바타의 크기를 조절합니다.',
            defaultValue: 'medium',
            control: 'select',
            options: [
                'small',
                'medium',
                'large',
            ],
        },
        shadow: {
            description: '아바타에 박스 쉐도우를 입혀줍니다.',
            defaultValue: false,
        }
    },
} satisfies Meta<typeof Avatar>;

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
<c-avatar src="../assets/img/logo.png"/>
`
            }
        }
    },
    render: (args) => ({
        components: {
            Avatar,
        },
        setup() {
            return { args };
        },
        template: `
            <Avatar v-bind="args" src="../assets/img/logo.png"/>
        `
    }),
    args: {
        rounded: true,
        size: 'medium',
        shadow: false,
    },
};

export const squareAvatar: Story = {
    parameters: {
        docs: {
            source: {
                code: `
<c-avatar :rounded=false src="../assets/img/logo.png"/>
`
            }
        }
    },
    render: (args) => ({
        components: {
            Avatar,
        },
        setup() {
            return { args };
        },
        template: `
            <Avatar v-bind="args" src="../assets/img/logo.png"/>
        `
    }),
    args: {
        rounded: false,
        size: 'medium',
        shadow: false,
    },
};

export const Size: Story = {
    parameters: {
        docs: {
            source: {
                code: `
<c-avatar size='small' src='../assets/img/logo.png'/>
<c-avatar size='medium' src='../assets/img/logo.png'/>
<c-avatar size='large' src="../assets/img/logo.png"/>
`
            }
        }
    },
    render: (args) => ({
        components: {
            Avatar,
        },
        setup() {
            return { args };
        },
        template: `
        <div :style="{display:'flex', gap: '1rem'}">
            <Avatar v-bind="args" size='small' src="../assets/img/logo.png"/>
            <Avatar v-bind="args" size='medium' src="../assets/img/logo.png"/>
            <Avatar v-bind="args" size='large' src="../assets/img/logo.png"/>
        </div>
        `
    }),
    args: {
        rounded: true,
        size: 'medium',
        shadow: false,
    },
};

export const initialAvatar: Story = {
    parameters: {
        docs: {
            source: {
                code: `
<c-avatar size='small'>
    <span>SK</span>
</c-avatar>
<c-avatar>
    <span>SK</span>
</c-avatar>
<c-avatar size='large'>
    <span>SK</span>
</c-avatar>
`
            }
        }
    },
    render: (args) => ({
        components: {
            Avatar,
        },
        setup() {
            return { args };
        },
        template: `
        <div :style="{display:'flex', gap: '1rem'}">
            <Avatar v-bind="args" size='small'>
                <span>SK</span>
            </Avatar>
            <Avatar v-bind="args">
                <span>SK</span>
            </Avatar>
            <Avatar v-bind="args" size='large'>
                <span>SK</span>
            </Avatar>
        </div>
        `
    }),
    args: {
        rounded: true,
        size: 'medium',
        shadow: false,
    },
};

export const avatarGroup: Story = {
    parameters: {
        docs: {
            source: {
                code: `
<c-avatar-group :max="5">
    <c-avatar src="../assets/img/logo.png"/>
    <c-avatar src="../assets/img/logo.png"/>
    <c-avatar src="../assets/img/logo.png"/>
    <c-avatar src="../assets/img/logo.png"/>
    <c-avatar src="../assets/img/logo.png"/>
    <c-avatar src="../assets/img/logo.png"/>
    <c-avatar src="../assets/img/logo.png"/>
</c-avatar-group>
`
            }
        }
    },
    render: (args) => ({
        components: {
            Avatar,
            AvatarGroup,
        },
        setup() {
            return { args };
        },
        template: `
        <AvatarGroup v-bind="args" :max="5">
            <Avatar v-bind="args" src="../assets/img/logo.png"/>
            <Avatar v-bind="args" src="../assets/img/logo.png"/>
            <Avatar v-bind="args" src="../assets/img/logo.png"/>
            <Avatar v-bind="args" src="../assets/img/logo.png"/>
            <Avatar v-bind="args" src="../assets/img/logo.png"/>
            <Avatar v-bind="args" src="../assets/img/logo.png"/>
            <Avatar v-bind="args" src="../assets/img/logo.png"/>
        </AvatarGroup>
        `
    }),
    args: {
        // rounded: true,
        // size: 'medium',
        // shadow: false,
    },
};