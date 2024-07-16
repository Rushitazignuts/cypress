import TheWelcome from './TheWelcome.vue'

describe('<TheWelcome />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(TheWelcome)
  })
})