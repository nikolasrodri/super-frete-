import Calcular from "../support/Pages/Calcular";
context('Calculo de frete com tamanho invalido invalido', () => {

    it('Calcular frete do usuario com tamanho invalido', () => {

        Calcular.acessarPaginaInicial();
        Calcular.CepOrigem();
        Calcular.PesoPacote();
        Calcular.AlturaPacoteinvalido();
        Calcular.LarguraPacoteInvalida();
        Calcular.ComprimentoPacoteinvalido();
        Calcular.CepDestino();
        Calcular.BtnCalcular();
        Calcular.ValidacaoTamanhoInvalido();
    })
    

})