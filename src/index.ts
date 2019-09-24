import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { User } from './entity/User';
import { Opportunity } from './entity/Opportunity';

createConnection()
  .then(async (connection) => {
    const user = new User();
    user.firstName = `Timber_${Math.random()}`;
    user.lastName = 'Saw';
    user.age = 20;
    await connection.manager.save(user);

    const opportunity = new Opportunity();
    opportunity.user = user;
    await connection.manager.save(opportunity);

    const users = await connection
      .getRepository(User)
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.opportunities', 'opportunity')
      .getMany();
    console.log(users);
  })
  .catch(console.error);
