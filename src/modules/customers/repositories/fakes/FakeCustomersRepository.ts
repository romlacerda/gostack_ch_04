import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';
import ICreateCustomerDTO from '@modules/customers/dtos/ICreateCustomerDTO';
import Customer from '../../infra/typeorm/entities/Customer';

class FakeCustomersRepository implements ICustomersRepository {
  private customers: Customer[] = [];

  public async create({ name, email }: ICreateCustomerDTO): Promise<Customer> {
    const customer = new Customer();

    Object.assign(customer, { name, email });

    this.customers.push(customer);

    return customer;
  }

  public async findById(id: string): Promise<Customer | undefined> {
    return undefined;
  }

  public async findByEmail(email: string): Promise<Customer | undefined> {
    return undefined;
  }
}

export default FakeCustomersRepository;
