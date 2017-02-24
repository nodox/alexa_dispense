let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

// Our app server
let server = require('../../server/app');

// Configuration
chai.use(chaiHttp);



describe('GET /users', function() {

  it('should return 200', function() {
    chai.request(server)
      .get('/users')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

});


     
