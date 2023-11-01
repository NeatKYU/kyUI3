<template>
    <main>
        <h1>Welcome to your your sandbox environment</h1>
        <div class="flex gap m10 between">
            <c-input
                v-model="inputValue1"
                placeholder="Input"
                is-validate
                full
            />
            <c-input
                v-model="inputValue2"
                placeholder="Input"
                is-validate
            />
            <c-input
                v-model="inputValue3"
                type="email"
                placeholder="Input"
                is-validate
            />
            <c-input
                v-model="inputValue4"
                placeholder="Icon"
                left-icon="align-justify"
                is-validate
            />
            <c-input
                v-model="inputValue4"
                placeholder="Disabled"
                disabled
                is-validate
            />
        </div>
        <div class="flex gap m10">
            <div>
                <c-textarea v-model="inputValue1" placeholder="text area" isResize/>
            </div>
            <div>
                <c-textarea v-model="inputValue1" placeholder="text area" disabled/>
            </div>
            <div class="flex-col m-auto gap">
                <div class="flex gap m10">
                    <c-switch size="small" />
                    <c-switch size="medium" />
                    <c-switch size="large" />
                    <c-switch color="green"/>
                    <c-switch color="yellow"/>
                    <c-switch color="red"/>
                </div>
                <div class="flex gap m-auto">
                    <c-pagination
                        @changePage="changePage"
                        :totalCount="1032"
                        :perPage="10"
                        :showPage="5"
                        :currentPage="currentPage"
                        isEndButton
                    />
                </div>
            </div>
        </div>
        <div class="flex m10">
            <c-button full>Full Width Button</c-button>
        </div>
        <div class="flex gap between m10">
            <c-button primary>Button</c-button>
            <c-button>Button</c-button>
            <c-button rounded>Rounded</c-button>
            <c-button outlined>Outlined</c-button>
            <c-button size="small">Small</c-button>
            <c-button size="medium">Medium</c-button>
            <c-button size="large">Large</c-button>
        </div>
        <div class="flex gap between m10">
            <c-button left-icon="angle-left">Go Left</c-button>
            <c-button isIconButton size="small"/>
            <c-button isIconButton />
            <c-button isIconButton size="large"/>
            <c-button-group>
                <c-button>button1</c-button>
                <c-button>button2</c-button>
                <c-button>button3</c-button>
            </c-button-group>
        </div>
        <div class="flex-col m10">
            <div class="inline-flex gap m-auto">
                <c-badge textValue="badge" />
                <c-badge textValue="success" variant="success" />
                <c-badge textValue="danger" variant="danger" />
                <c-badge textValue="small" size="small" />
                <c-badge textValue="medium" />
                <c-badge textValue="large" size="large" />
                <div class="flex gap">
                    <c-spinner size="small" color="blue"></c-spinner>
                    <c-spinner color="blue"></c-spinner>
                    <c-spinner size="large" speed="2s"></c-spinner>
                </div>
            </div>
            <div class="inline-flex gap m-auto">
                <c-avatar src="https://picsum.photos/id/10/200/300" size="small" />
                <c-avatar src="https://picsum.photos/id/11/200/300" />
                <c-avatar src="https://picsum.photos/id/12/200/300" size="large"/>
                <c-avatar src="https://picsum.photos/id/13/200/300" :rounded=false size="large"/>
                <c-avatar-group :max="3">
                    <c-avatar src="https://picsum.photos/id/40/200/300" />
                    <c-avatar shadow src="https://picsum.photos/id/41/200/300" />
                    <c-avatar shadow src="https://picsum.photos/id/42/200/300" />
                </c-avatar-group>
                <c-avatar-group :max="3">
                    <c-avatar src="https://picsum.photos/id/54/200/300" />
                    <c-avatar src="https://picsum.photos/id/51/200/300" />
                    <c-avatar src="https://picsum.photos/id/52/200/300" />
                    <c-avatar src="https://picsum.photos/id/53/200/300" />
                    <c-avatar src="https://picsum.photos/id/54/200/300" />
                </c-avatar-group>
    
                <c-dropdown>
                    <template #trigger>
                        <c-button right-icon="caret-down"> select </c-button>
                    </template>
                    <template #item>
                        <c-dropdown-item icon="star" @click="clickButton">
                            test1
                        </c-dropdown-item>
                        <c-divider></c-divider>
                        <c-dropdown-item> test2 </c-dropdown-item>
                        <c-dropdown-item> test3 </c-dropdown-item>
                    </template>
                </c-dropdown>
            </div>
        </div>

        <div class="flex m10">
            <div class="inline-flex gap-10 m-auto">
                <c-datepicker v-model="dateValue"> </c-datepicker>
                <!-- <div>date picker value = {{ dateValue }}</div> -->
                <c-carousel :width="300" :images="imageSrcList" autoPlay></c-carousel>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputValue1 = ref('');
const inputValue2 = ref('success');
const inputValue3 = ref('fail');
const inputValue4 = ref('');
const currentPage = ref(1);
const selectDropdownItem = '';
const dropdownList = ['dropdown test', 'korea', 'USA'];
const imageSrcList = [
    'https://fakeimg.pl/250',
    'https://fakeimg.pl/200',
    'https://fakeimg.pl/300',
];
const dateValue = ref<string>(new Date().toString());

const clickButton = () => {
    console.log('click!');
};

const changePage = (page: number) => {
    currentPage.value = page;
};
</script>

<style lang="scss" scoped>
.flex {
    display: flex;
}
.flex-col {
    display: flex;
    flex-direction: column;
}
.inline-flex {
    display: inline-flex;
}
.center {
    justify-content: center;
}
.between {
    justify-content: space-between;
}
.gap {
    gap: 10px;
}
.gap-10 {
    gap: 50px;
}
.m10 {
    margin: 10px 0;
}
.m-auto {
    margin: 0 auto;
}
</style>
