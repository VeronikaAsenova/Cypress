/// <reference types = "cypress" />

import { TodoPage } from "../page-objects/todo-objects"

describe('filtering', () => {

    const todoPage = new TodoPage()

    beforeEach(() => {

        cy.visit('http://todomvc-app-for-testing.surge.sh')
        cy.get('.new-todo').type("Clean room{enter}")
        cy.get('.new-todo').type("Learn JS{enter}")
        cy.get('.new-todo').type("Use Cypress{enter}")

        cy.get(' .todo-list li:nth-child(2) .toggle').click()

    })

    it('should filter active todos', () => {

        todoPage.showOnlyActive()
        todoPage.validateOnlyActive

    })


    it('should filter completed todos', () => {

        todoPage.showOnlyCompleted()
        todoPage.validateOnlyCompleted()

    })


    it('should filter All todos', () => {
        todoPage.showAllTodo()
        todoPage.validateAllTodo()
    })
})