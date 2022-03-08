/// <reference types="cypress"/>

import articles from '../support/pages/articles'

describe('Articles', () => {
// HOOK -> trechos que devem ser executados antes ou depois dos testes

  beforeEach(() => {
    // cy.request ({
    //     url: 'https://api.realworld.io/api/users/login',
    //     method: 'POST',
    //     body:
    //     {
    //         "user":{
    //            "email":"adri@adri.com",
    //            "password":"123456"
    //         }
    //      }

    // }).then(response => {
    //     //console.log(response)
    //     //JSON Path -> Navegação através de um json
    //     console.log (response.body.user.token)

    //     window.localStorage.setItem('jwtToken', response.body.user.token)
    // })

    // Arange
    cy.login()

    cy.visit('/')
  })

  it('Cadstro de novo artigo com sucesso', () => {
    // fluxo de criação do article

    // Acesso ao form Executar
    articles.acessarOFormulario()

    // preencher o formulario
    articles.preencherFormulario()

    // Submeter o formulario
    articles.submeterFormulario()
    cy.contains('button', 'Publish Article').click()

    // verificar se o artigo foi criado
    articles.verificarSeArtigoFoiCriado()
  })
})
