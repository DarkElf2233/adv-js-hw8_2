import ErrorRepository from '../error_repo';

describe('ErrorRepository', () => {
  it('should return "Not Found" for 404 error code', () => {
    const err = new ErrorRepository();
    const result = err.translate(404);
    expect(result).toEqual('Not Found');
  });

  it('should return "Forbidden" for 403 error code', () => {
    const err = new ErrorRepository();
    const result = err.translate(403);
    expect(result).toEqual('Forbidden');
  });

  it('should return "Successful" for 201 error code', () => {
    const err = new ErrorRepository();
    const result = err.translate(201);
    expect(result).toEqual('Successful');
  });

  it('should return "Unknown error" for unknown error code', () => {
    const err = new ErrorRepository();
    const result = err.translate('unknown');
    expect(result).toEqual('Unknown error');
  });
});
