import type { Meta, StoryObj } from '@storybook/vue3';

import Accordion from '@/components/accordion/Accordion.vue';
import AccordionGroup from '@/components/accordion/AccordionGroup.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'kyUI3/Accordion',
    component: Accordion,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        title: {
            description: '아코디언 타이틀',
            defaultValue: 'title',
        },
        isArrow: {
            description: '화살표 여부',
            defaultValue: false,
        },
    },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    render: (args) => ({
        components: { Accordion },
        setup() {
            return { args };
        },
        template: `
            <Accordion v-bind="args">
                <div>아코디언 내용</div>
            </Accordion>
        `,
    }),
    args: {
        title: 'accordion',
        isArrow: false,
    },
};

export const Group: Story = {
    parameters: {
        docs: {
            source: {
                code: `
<c-accordion-group>
    <c-accordion title="accordion1">
        <div>여기에 내용을</div>
    </c-accordion>
    <c-accordion title="accordion2">
        <div>꾸며 주시면</div>
    </c-accordion>
    <c-accordion title="accordion3">
        <div>아름다운 아코디언이 완성됩니다.</div>
    </c-accordion>
</c-accordion-group>
`,
            },
        },
    },
    render: (args) => ({
        components: { Accordion, AccordionGroup },
        setup() {
            return { args };
        },
        template: `
        <AccordionGroup>
            <Accordion title="accordion1">
                <div>여기에 내용을</div>
            </Accordion>
            <Accordion title="accordion2">
                <div>꾸며 주시면</div>
            </Accordion>
            <Accordion title="accordion3">
                <div>아름다운 아코디언이 완성됩니다.</div>
            </Accordion>
        </AccordionGroup>
        `,
    }),
};
