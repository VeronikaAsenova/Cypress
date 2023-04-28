/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-objects"


describe('todo actions', () => {

    const todopage = new TodoPage()

    beforeEach(() => {

        todopage.navigate()
        todopage.addTodo("Clean room")
    })


    it('should add a new todo to the list', () => {
        todopage.validateTodoText(0, 'Clean room')
        todopage.validateToggleState(0, false)
    })


    it('should mark a toodo as completed', () => {

        cy.get('.toggle').click()
        todopage.validateHasLineThrough
    })


    it('should clear completed todo', () => {
        cy.get('.toggle').click()
        cy.contains("Clear").click()
        todopage.validateHasNoDescendants()
    })


})
