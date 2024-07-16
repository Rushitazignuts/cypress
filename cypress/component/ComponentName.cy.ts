import TheWelcome from '../../src/components/TheWelcome.vue'

describe('<TheWelcome />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(TheWelcome)
  })
})