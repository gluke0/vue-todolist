const { createApp } = Vue

createApp({
    data() {
        return {

            newT: '',

            todos: [
                {
                    text: 'Chiamare la banca',
                    done: false
                },
                {
                    text: 'Fare benzina',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                },
                {
                    text: 'Comprare le uova',
                    done: false
                },
                {
                    text: 'Fare i compiti',
                    done: true
                }
            ]
        }
    },

    methods:{
        newToDo(){
            if(this.newT.split() != ''){
                const task = {
                    text: this.newT,
                    done: false,
                }
                this.todos.unshift(task);
                this.newT = '';
            }
        },

        
    }
}).mount('#app')