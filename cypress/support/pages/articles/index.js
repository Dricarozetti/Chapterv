
const el = require('./elements').ELEMENTS

const articleName = 'Vamos testar' + new Date().getTime()

class Articles {
  // Acesso ao form Executar
  acessarOFormulario () {
    cy.get(el.linkNovoArtigo).click()
  }

  // preencher o formulario
  preencherFormulario () {
    cy.get(el.inputTitle).type(articleName)
    cy.get(el.inputDespription).type('Quero ver fazer')
    cy.get(el.inputBody).type('sem dessistir rei, bora lá')
    cy.get(el.inputTags).type('cypress')
  }

  // Submeter o formulario
  submeterFormulario () {
    cy.contains('button', 'Publish Article').click()
  }

  // verificar se o artigo foi criado
  verificarSeArtigoFoiCriado () {
    cy.contains(articleName).should('be.visible')

    cy.get('h1').should('have.text', articleName)
  }
}

export default new Articles()
