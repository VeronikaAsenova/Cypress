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
        cy.get('.toggle').should('not.be.checked')
    })


    it('should mark a toodo as completed', () => {

        cy.get('.toggle').click()
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
    })


    it('should clear completed todo', () => {
        cy.get('.toggle').click()
        cy.contains("Clear").click()
        cy.get('.todo-list').should('not.have.descendants', 'li')
    })


})
