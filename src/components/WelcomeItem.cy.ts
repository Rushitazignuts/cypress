import WelcomeItem from './WelcomeItem.vue'

describe('<WelcomeItem />', () => {
  it('renders', () => {
    const slots = {
      heading: 'my header',
      default: 'my details'
    }
    cy.mount(WelcomeItem, {
      slots,
    })
    cy.get('h3').should('have.text', 'my header')
    cy.get('.details').should('contain.text', 'my details')
  })
})
