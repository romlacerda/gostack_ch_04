import 'reflect-metadata';

import CreateCustomerService from './CreateCustomerService';
import FakeCustomerRepository from '../repositories/fakes/FakeCustomersRepository';

let createCustomer: CreateCustomerService;
let fakeCustomerRepository: FakeCustomerRepository;

describe('CreateCustomer', () => {
  beforeEach(() => {
    fakeCustomerRepository = new FakeCustomerRepository();
    createCustomer = new CreateCustomerService(fakeCustomerRepository);
  });

  it('should be apple to create a new user', async () => {
    const customer = await createCustomer.execute({
      name: 'John Doe',
      email: 'johndoe@john.com',
    });

    expect(customer).toHaveProperty('id');
  });
});
