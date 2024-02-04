

import inquirer from "inquirer";


let todos: string[] = []


async function createTodo(todos: string[]) {

    do {


        let answer = await inquirer.prompt({
            type: "list",
            message: "Selet an operation",
            name: "select",
            choices: ["Add", "Update", "View", "Delete", "Exit"]
        })

        if (answer.select == "Add") {

            let addtodo = await inquirer.prompt({
                type: "input",
                message: "Add item",
                name: "todo"
            })

            todos.push(addtodo.todo)
            console.log(todos)


        }
        if (answer.select == "Update") {

            let updatetodo = await inquirer.prompt({
                type: "list",
                message: "Update item",
                choices: todos.map(item => item),
                name: "todo"
            })

            let addtodo = await inquirer.prompt({
                type: "input",
                message: "Add item",
                name: "todo"
            })


            let newtodos = todos.filter(val => val !== updatetodo.todo)
            todos = [...newtodos, addtodo.todo]
            console.log(todos)


        }

        if (answer.select == "View") {
            console.log(todos)

        }


        if (answer.select == "Delete") {

            let deletetodo = await inquirer.prompt({
                type: "list",
                message: "Delete item",
                choices: todos.map(item => item),
                name: "todo"
            })

            let newtodos = todos.filter(val => val !== deletetodo.todo)
            todos = [...newtodos]
            console.log(todos)


        }

        if (answer.select == "Exit") {
            break
            }

    }
    while (true)
    
}

createTodo(todos)










