import Calcular from "../support/Pages/Calcular";
context('Calculo de frete ', () => {

    it('Calcular frete do usuario', () => {

        Calcular.acessarPaginaInicial();
        Calcular.CepOrigem();
        Calcular.PesoPacote();
        Calcular.AlturaPacote();
        Calcular.LarguraPacote();
        Calcular.ComprimentoPacote();
        Calcular.CepDestino(); 
        Calcular.BtnCalcular();
        Calcular.ValidacaoCalculoFrete();
    });
    
});