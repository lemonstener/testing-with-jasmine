describe('calculateMonthlyPayment test', function () {
  it('should calculate the monthly rate correctly', function () {
    const values = {
      amount: 10000,
      years: 5,
      rate: 3
    };
    expect(calculateMonthlyPayment(values)).toEqual('179.69');
  });
  it('should calculate the monthly rate correctly', function () {
    const values = {
      amount: 30000,
      years: 6.5,
      rate: 3.7
    };
    expect(calculateMonthlyPayment(values)).toEqual('433.31');
  });
  it('should calculate the monthly rate correctly', function () {
    const values = {
      amount: 3563829.584312783128735,
      years: 7,
      rate: 25
    };
    expect(calculateMonthlyPayment(values)).toEqual('90206.36');
  });
})


describe('decimal test', function () {
  it("should return a result with 2 decimal places", function () {
    const values = {
      amount: 10043,
      years: 8,
      rate: 5.8
    };
    expect(calculateMonthlyPayment(values)).toEqual('131.00');
  });
  it('should return a result with 2 decimal places', function () {
    const values = {
      amount: 60723,
      years: 4.5,
      rate: 6.3
    };
    expect(calculateMonthlyPayment(values)).toEqual('1294.35');
  })
  it('should return a decimal', function () {
    const values = {
      amount: 60723,
      years: 4.5,
      rate: 6.3
    };
    expect(calculateMonthlyPayment(values) % 1).not.toEqual('0');
  })
  it('should return a decimal', function () {
    const values = {
      amount: 40521,
      years: 17,
      rate: 38
    };
    expect(calculateMonthlyPayment(values) % 1).not.toEqual('0');
  })
})

describe('crazy rates test', function () {
  it('should work for rates of 100% and higher', function () {
    const values = {
      amount: 60723,
      years: 4.5,
      rate: 100
    };
    expect(calculateMonthlyPayment(values)).toEqual('5128.30');
  })
  it('should work for rates of 100% and higher', function () {
    const values = {
      amount: 160723,
      years: 2,
      rate: 150
    };
    expect(calculateMonthlyPayment(values)).toEqual('21354.62');
  })
  it('should work with a negative rate value', function () {
    const values = {
      amount: 15000,
      years: 3,
      rate: -23
    };
    expect(calculateMonthlyPayment(values)).toEqual('285.47');
  })

})

describe('NaN,Infinity and 0 test', function () {
  it('should return NaN with empty fields', function () {
    const values = {
      amount: '',
      years: '',
      rate: ''
    };
    expect(calculateMonthlyPayment(values)).toEqual('NaN');
  })
  it('should return NaN when "rate" is empty', function () {
    const values = {
      amount: 10000,
      years: 4,
      rate: ''
    };
    expect(calculateMonthlyPayment(values)).toEqual('NaN');
  })
  it('should return infinity when "years" is empty', function () {
    const values = {
      amount: 10000,
      years: '',
      rate: 13
    };
    expect(calculateMonthlyPayment(values)).toEqual('Infinity');
  })
  it('should return NaN when there is a string', function () {
    const values = {
      amount: 'hello',
      years: 37,
      rate: 13
    };
    expect(calculateMonthlyPayment(values)).toEqual('NaN');
  })
  it('should return 0 when "amount" is empty', function () {
    const values = {
      amount: '',
      years: 4,
      rate: 27
    };
    expect(calculateMonthlyPayment(values)).toEqual('0.00');
  })
})

describe('testing for variables', function () {
  it('should make sure that value of p is correct', function () {
    const values = {
      amount: 10500,
      years: 2.5,
      rate: 18
    };
    const p = values.amount;
    expect(p).toEqual(10500)
  })
  it('should make sure that value of i is correct', function () {
    const values = {
      amount: 10500,
      years: 2.5,
      rate: 18
    };
    const monthlyRate = (values.rate / 100) / 12;
    expect(monthlyRate).toEqual(0.015);
  })
  it('should make sure that value of n is correct', function () {
    const values = {
      amount: 10500,
      years: 2.5,
      rate: 18
    };
    const n = values.years * 12;
    expect(n).toEqual(30);
  })
})




