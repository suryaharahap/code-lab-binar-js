module.exports = {
  index: (req, res) => {
    res.status(200).json({
      status: true,
      message: 'Hello world!',
    });
  },

  sum: (req, res) => {
    const { x, y } = req.body; // mendapatkan nilai x dan y dari request body

    if (x === undefined || y === undefined) {
      // periksa apakah x dan y ada dalam request body
      return res.status(400).json({
        status: false,
        message: 'Bad request. x and y must be provided.',
      });
    }

    const result = x + y;

    res.status(200).json({
      status: true,
      message: 'Sum operation completed.',
      data: { x, y, result },
    });
  },
};
