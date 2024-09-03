import Calcular from "../support/Pages/Calcular";
context('Calculo de frete com CEP invalido', () => {

    it('Calcular frete do usuario CEP invalido', () => {

        Calcular.acessarPaginaInicial();
        Calcular.CepOrigemInvalido();
        Calcular.PesoPacote();
        Calcular.AlturaPacote();
        Calcular.LarguraPacote();
        Calcular.ComprimentoPacote();
        Calcular.CepDestinoInvalido();
        Calcular.BtnCalcular();
        Calcular.ValidacaoCepInvalido();
    })
    

})