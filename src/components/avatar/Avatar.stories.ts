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
<c-avatar src="https://picsum.photos/id/58/200/300"/>
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
            <Avatar v-bind="args" src="https://picsum.photos/id/58/200/300"/>
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
<c-avatar :rounded=false src="https://picsum.photos/id/58/200/300"/>
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
            <Avatar v-bind="args" src="https://picsum.photos/id/58/200/300"/>
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
<c-avatar size='small' src='https://picsum.photos/id/1/200/300'/>
<c-avatar size='medium' src='https://picsum.photos/id/1/200/300'/>
<c-avatar size='large' src="https://picsum.photos/id/1/200/300"/>
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
            <Avatar v-bind="args" size='small' src="https://picsum.photos/id/1/200/300"/>
            <Avatar v-bind="args" size='medium' src="https://picsum.photos/id/1/200/300"/>
            <Avatar v-bind="args" size='large' src="https://picsum.photos/id/1/200/300"/>
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
    <c-avatar src="https://picsum.photos/id/1/200"/>
    <c-avatar src="https://picsum.photos/id/2/200"/>
    <c-avatar src="https://picsum.photos/id/3/200"/>
    <c-avatar src="https://picsum.photos/id/4/200"/>
    <c-avatar src="https://picsum.photos/id/5/200"/>
    <c-avatar src="https://picsum.photos/id/6/200"/>
    <c-avatar src="https://picsum.photos/id/7/200"/>
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
            <Avatar v-bind="args" src="https://picsum.photos/id/1/200"/>
            <Avatar v-bind="args" src="https://picsum.photos/id/11/200"/>
            <Avatar v-bind="args" src="https://picsum.photos/id/21/200"/>
            <Avatar v-bind="args" src="https://picsum.photos/id/31/200"/>
            <Avatar v-bind="args" src="https://picsum.photos/id/41/200"/>
            <Avatar v-bind="args" src="https://picsum.photos/id/51/200"/>
            <Avatar v-bind="args" src="https://picsum.photos/id/61/200"/>
        </AvatarGroup>
        `
    }),
    args: {
        // rounded: true,
        // size: 'medium',
        // shadow: false,
    },
};