

    const element = require ('./elements').Elements;
    class Calcular {

        acessarPaginaInicial(){
            cy.visit('https://web.superfrete.com')
            cy.wait(15000)
        }
         
        CepOrigem (){  
            
            cy.get(element.cep).type('08090-284')
            
        }
        PesoPacote(){
            cy.get(element.pesoPacote).click()
            cy.get('li').contains('Até 300g').click()
        }

        AlturaPacote(){
            
            cy.get(element.alturaPacote).type('30')
        }

        LarguraPacote(){

            cy.get(element.larguraPacote).type('30')
        }

        ComprimentoPacote(){

            cy.get(element.comprimentoPacote).type('30')
        }

        CepDestino(){

            cy.get(element.cepDestino).type('05407-002')
        }

        BtnCalcular(){
            cy.get(element.btnCalcular).click();
            cy.wait(25000);
        }

        AlturaPacoteinvalido(){
            cy.get(element.alturaPacote).type('160')
        }

        LarguraPacoteInvalida(){
            cy.get(element.larguraPacote).type('10')
        }

        ComprimentoPacoteinvalido(){
            cy.get(element.comprimentoPacote).type('20')
        }

        CepOrigemInvalido (){
            cy.get(element.cep).type('06443-000')
        }

        CepDestinoInvalido(){

            cy.get(element.cepDestino).type('02154-100')
        }

        ValidacaoCepInvalido(){

           cy.get(element.ValidacaoCepOrigemInvalido).should('be.visible')
           
        }

        ValidacaoTamanhoInvalido(){

            cy.get(element.ValidacaoTamanhoInvalido).should('be.visible')
        } 

        ValidacaoCalculoFrete(){
            
            cy.get(element.ValidacaoCalculoFrete).click();
           
        } 

       btnSalvar(){

            cy.get(element.btnSalvar).click();
            cy.wait(25000);
        }



    }
    export default new Calcular();


