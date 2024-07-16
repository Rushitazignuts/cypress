import AboutView from './AboutView.vue'

describe('<AboutView />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(AboutView)
  })
})