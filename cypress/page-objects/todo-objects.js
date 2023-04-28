export class TodoPage {
    navigate() {
        cy.visit('http://todomvc-app-for-testing.surge.sh')
    }

    addTodo(todoText) {
        cy.get('.new-todo').type(todoText + "{enter}")
    }

    validateTodoText(todoIndex, expectedText) {

        cy.get(` .todo-list li:nth-child(${todoIndex + 1}) lavel`).should('have.text', expectedText)

    }

    showOnlyActive(){
        cy.contains('Active').click()
    }

    showOnlyCompleted(){
        cy.contains('Completed').click()
    }

    showAllTodo(){
        cy.contains('All').click()
    }

    validateOnlyActive(){
        cy.get(' .todo-list li').should('have.length', 2)
    }

    validateOnlyCompleted(){
        cy.get(' .todo-list li').should('have.length', 1)
    }

    validateAllTodo(){
        cy.get(' .todo-list li').should('have.length', 3)

    }
}