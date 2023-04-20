const { createApp } = Vue

createApp({
    data() {
        return {

            newT: '',
            done: 'text-decoration-line-through',

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
                let task = {
                    text: this.newT,
                    done: false,
                }
                this.todos.unshift(task);
                this.newT = '';
            }
        },

        erase(index){
            this.todos.splice(index, 1);
            console.log(index);
        },
        
        completed(index){
            if(this.todos[index].done == false){
                this.todos[index].done = true;
            } else {
                this.todos[index].done = false;
            };
        },
        
    }
}).mount('#app')