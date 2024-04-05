export const checkFavoritePost = () => {
  const textArray = [false, true]
  const randomNumber = Math.floor(Math.random() * textArray.length)

  const PostoFavoritoID = randomNumber === 1 ? Math.random().toString() : null
  return {
    Perfil: {
      Id: 1,
      Descricao: 'Urbano',
    },
    Categoria: {
      Id: 1,
      Descricao: 'Básica',
    },
    ParticipanteId: 37383687,
    NomedaMae: 'testando fa',
    Status: 'APPROVED',
    StatusUsuario: 'Aprovado',
    Motivo: 'Aprovado',
    PossuiSenha: true,
    ReconhecimentoFacial: '',
    CPF: '42302640896',
    DataNascimento: '1995-10-17T00:00:00',
    Nome: 'Lucas',
    SobreNome: 'Carvalho Cosme',
    Email: 'lccosme1@gmail.com',
    DDDCel: '11',
    Celular: '996278670',
    DDDTel: null,
    Telefone: null,
    CEP: '02713-000',
    Estado: 'SP',
    Cidade: 'São Paulo',
    Endereco: 'Coronel Euclides Machado',
    Numero: '185',
    Complemento: '',
    Bairro: 'Jardim das Graças',
    EstadoPostoFavorito: 'SP',
    CidadePostoFavorito: 'Sao Paulo',
    BairroPostoFavorito: 'Bela Vista',
    PostoFavoritoID,
    AceitouRegulamento: true,
    RegulamentoUuid: 'OPT-5aa47b92-f29c-47f5-a947-6acfcb7916e5',
    AceiteTermo: true,
    TermoUuid: 'OPT-19031c5c-9e0d-4171-a7b4-422b1966e710',
    Sexo: null,
    SaldoMoeda: 1363,
    KmExpirando: '0',
    DataDeExpiracao: '2024-04-30T00:00:00',
    CompletouCadastro: true,
    PerguntaSecretaID: null,
    PerguntaSecreta: null,
    RespostaSecreta: null,
    TimeDoCoracaoID: null,
    NomeTimeCoracao: null,
    PossuiCartaoIpiranga: null,
    PossuiAcumuloVeiculo: null,
    Apelido: null,
    SouAutonomo: null,
    SaldoCombs: 0.0,
    Alerta: null,
    DataCadastro: '2020-08-20T16:52:00',
    DataAtualizacao: '2024-03-27T17:17:27.403',
    OrigemCadastro: 'Site',
  }
}
