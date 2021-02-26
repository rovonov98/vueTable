import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        api: 'http://localhost:3000/person',
        persons: [
            {
                uuid: '1',
                firstName: 'firstName',
                lastName: 'lastName'

            }
        ],
        editing: ''
    },
    mutations: {
        getPersons(state, persons) {
            state.persons = persons
        },
        deletePerson(state, uuid) {
            state.persons = state.persons.filter((person) => {
                return person.uuid !== uuid
            })
        },
        postPerson(state, person) {
            state.persons.push(person)
        },
        changeEditing(state, payload) {
            state.editing = payload
        }
    },
    actions: {
        getPersons(state) {
            fetch(this.state.api,)
            .then(res => res.json())
            .then(data => state.commit('getPersons', data))
            .catch(error => console.log(error))
        },
        deletePerson(state, uuid) {
            fetch(`${this.state.api}/${uuid}`, {
                method: 'DELETE',
            })
            .then(res => res.text())
            .then(() => state.commit('deletePerson', uuid))
            .catch(error => console.log(error))
        },
        postPerson(state, person) {
            fetch(this.state.api, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: person.firstName,
                    lastName: person.lastName
                })
            })
            .then(res => res.json())
            .then(data => {
                state.commit('postPerson', {
                    firstName: person.firstName,
                    lastName: person.lastName,
                    uuid: data
                })
            })
            .catch(error => console.log(error))
        },
        putPerson(state, payload) {
            fetch(`${this.state.api}/${payload.uuid}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: payload.person.firstName,
                    lastName: payload.person.lastName
                })
            })
            .then(res => res.text())
            .then(() => {
                state.commit('changeEditing', '')
            })
        }
    },
    getters: {
        getPersons: state => state.persons,
        getEditing: state => state.editing
    }

})