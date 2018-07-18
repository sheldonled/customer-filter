import { join } from 'path';
import customer from '../src/customer';

describe('Tests for api/src/customer.js', () => {

  describe('customers.readDataFile', () => {

    it('should read the file without errors', done => {
      customer.readDataFile(join(__dirname, '../data/customers.txt'))
        .then(data => {
          expect(typeof data).toEqual('string');
          done();
        });
    });

    it('should throw an error when the filepath is wrong', done => {
      let wrongFilePath = join(__dirname, '/data/customers.txt');
      customer.readDataFile(wrongFilePath)
        .catch(err => {
          expect(err.errno).toEqual(-2);
          expect(err.code).toEqual('ENOENT');
          expect(err.message).toEqual(`ENOENT: no such file or directory, open '${wrongFilePath}'`);
          done();
        });
    });

  });

  describe('customers.getAll', () => {

    it('should get all customers from default path without errors', done => {
      customer.getAll()
        .then(data => {
          expect(typeof data).toEqual('string');
          done();
        });
    });
    
  });
});