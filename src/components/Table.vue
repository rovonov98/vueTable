<template>
    <v-simple-table>
        <template v-slot:default>
        <thead>
            <tr>
                <th class="text-left">
                    First Name
                </th>
                <th class="text-left">
                    Last Name
                </th>
            </tr>
        </thead>
        <tbody>
            <tr
            v-for="(item, index) in persons"
            :key="index">
                <td v-if="editing === item.uuid">
                    <v-text-field
                    v-model="item.firstName">
                    </v-text-field>
                </td>
                <td v-if="editing === item.uuid">
                    <v-text-field
                    v-model="item.lastName">
                    </v-text-field>
                </td>
                <td v-if="editing === item.uuid">
                    <v-btn
                    elevation="2"
                    x-small
                    @click="$store.dispatch('putPerson', {
                       uuid: item.uuid,
                       person: persons[index]
                    })">
                        save
                    </v-btn>
                </td>
                <td v-if="editing !== item.uuid">
                    {{ item.firstName }}
                </td>
                <td v-if="editing !== item.uuid">
                    {{ item.lastName }}
                </td>
                <td v-if="editing !== item.uuid">
                    <v-btn
                    elevation="2"
                    x-small
                    @click="editHandler(item.uuid)">
                        edit
                    </v-btn>
                </td>
                <td>
                    <v-btn
                    elevation="2"
                    x-small
                    @click="$store.dispatch('deletePerson', item.uuid)">
                        delete
                    </v-btn>
                </td>
            </tr>
            <tr>
                <v-text-field
                v-if="isAdding"
                v-model="newPerson.firstName"></v-text-field>
                <v-text-field
                v-if="isAdding"
                v-model="newPerson.lastName"></v-text-field>
                <v-btn
                v-if="!isAdding"
                elevation="2"
                x-small
                @click="addHandler">
                    add person
                </v-btn>
                <v-btn
                v-if="isAdding"
                elevation="2"
                x-small
                @click="submitHandler">
                    submit
                </v-btn>
            </tr>
        </tbody>
    </template>
    </v-simple-table>
</template>

<script>
export default {
    name: 'Table',
    data() {
        return {
            api: 'http://localhost:3000/person',
            isAdding: false,
            newPerson: {
                firstName: '',
                lastdName: ''
            },
        }
    },
    computed: {
        persons() {
            return this.$store.getters.getPersons
        },
        editing() {
            return this.$store.getters.getEditing
        }
    },
    methods: {
        submitHandler() {
            this.$store.dispatch('postPerson', this.newPerson)
            this.addingToggle()
        },
        addHandler() {
            this.newPerson.firstName = ''
            this.newPerson.lastName = ''
            this.addingToggle()
        },
        editHandler(uuid) {
            if (this.editing === '') {
                this.$store.commit('changeEditing', uuid)
            }
        },
        addingToggle() {
            this.isAdding = !this.isAdding
        },
    },
    async created() {
        this.$store.dispatch('getPersons')
    }
}
</script>