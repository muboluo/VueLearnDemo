<template>
    <div>
        <div>demo0402</div>
        <ul>

            <li v-for="(item, index) in lists" :key="index"

                :class="{active: index == current && current != ''}"
                @click="choose(index)"
            >

                {{item}}

            </li>
        </ul>

        <button type="button" @click="add()"></button>
        <ul>

            <li v-for="(item, index) in target" :key="index"> {{item}}</li>
        </ul>

    </div>

</template>

<script>

    export default {

        name: 'demo1',

        data() {

            return {

                current: '',

                lists: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                target: []
            }
        },

        methods: {

            choose(index) {

                console.log(index)
                this.current = index
            },

            add() {

                if (this.current === '') {
                    return
                }

                this.target.push(this.lists[this.current])
                this.current = ''
            }

        }
    }

</script>

<style scoped>

    li.active {
        background: green;
    }
</style>