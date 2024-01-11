export default class ErrorRepository {
  constructor() {
    this.errorRepo = new Map();
    this.errorRepo.set(404, 'Not Found');
    this.errorRepo.set(403, 'Forbidden');
    this.errorRepo.set(201, 'Successful');
  }

  translate(code) {
    if (this.errorRepo.has(code)) {
      return this.errorRepo.get(code);
    }
    return 'Unknown error';
  }
}
