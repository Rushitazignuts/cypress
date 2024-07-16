import HelloWorld from './HelloWorld.vue'

describe('<HelloWorld />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(HelloWorld, {
      props: {
        msg: 'You did it!',
      },
    })
  })

  it('stepper should default to 0', () => {
    cy.mount(HelloWorld)
    cy.get('button').should('contains.text', 'Click me!')
  })

  it('renders', () => {
    cy.mount(HelloWorld, {
      slots: {
        default: 'Hello there!',
      },
    })
    cy.get('div.content').should('have.text', 'Hello there!')
    // cy.screenshot('search-results');

  })
})

