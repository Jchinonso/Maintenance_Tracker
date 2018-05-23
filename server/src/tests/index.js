import chai from 'chai';
import chaiHttp from 'chai-http';
import dotenv from 'dotenv';
import getRequest from './getRequest';
import postRequest from './postRequest';
import updateRequest from './updateRequest';

dotenv.config();
chai.should();
chai.use(chaiHttp);
describe('Test for Request API endpoints', () => {
  getRequest();
  postRequest();
  updateRequest();
});
