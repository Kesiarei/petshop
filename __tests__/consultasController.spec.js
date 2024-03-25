const { listConsultas, agendarConsulta, atualizarStatusConsulta, filtrarConsultas } = require('../backend/controllers/consultaController');

// Mock do modelo de consulta
jest.mock('../backend/models/Consulta', () => ({
  findAll: jest.fn(),
  create: jest.fn(),
  findByPk: jest.fn(),
}));

// Mock do objeto de resposta
const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('Testes do Consulta Controller', () => {
  // Teste para listar todas as consultas
  describe('listConsultas', () => {
    test('Deve retornar todas as consultas', async () => {
      const req = {};
      const res = mockResponse();
      const mockConsultas = [{ id: 1, pet: 'Dog', cliente: 'John', horario: '2024-03-23', status: 'Agendada' }];
      
      // Mock da função Consulta.findAll para retornar as consultas
      require('../backend/models/Consulta').findAll.mockResolvedValueOnce(mockConsultas);
      
      await listConsultas(req, res);
      
      expect(res.json).toHaveBeenCalledWith(mockConsultas);
    });

    test('Deve retornar status 500 em caso de erro', async () => {
      const req = {};
      const res = mockResponse();
      
      // Mock da função Consulta.findAll para lançar um erro
      require('../backend/models/Consulta').findAll.mockRejectedValueOnce(new Error('Erro ao buscar as consultas'));

      await listConsultas(req, res);
      
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Erro ao buscar as consultas' });
    });
  });


});
