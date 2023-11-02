const base = require('../controllers/baseControllers');
const mockRequest = (body = {}) => ({ body });
const mockResponse = () => {
  const res = {};
  res.json = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);
  return res;
};

// memberi deskripsi buat skenario test case
describe('base.index function', () => {
  // menjalankan testing buat satu skenarion
  test('res.json called with { status: true, message: "Hello world"}', (done) => {
    const req = mockRequest();
    const res = mockResponse();
    base.index(req, res);
    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith({
      status: true,
      message: 'Hello world!',
    });
    // mengakhiri satu skenario
    done();
  });
});

describe('base.sum function', () => {
  // menjalankan testing buat satu skenarion
  test('res.json called with { ...basicResponse, data: {x: x, y: y, result: x + y }}', (done) => {
    const req = mockRequest({ x: 5, y: 10 });
    const res = mockResponse();
    const expectedResult = req.body.x + req.body.y;
    base.sum(req, res);
    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith({
      status: true,
      message: 'Sum operation completed.',
      data: { x: req.body.x, y: req.body.y, result: req.body.x + req.body.y },
    });
    // mengakhiri satu skenario
    done();
  });
});
