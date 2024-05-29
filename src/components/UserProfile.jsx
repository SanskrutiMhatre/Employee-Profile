import React from 'react';
import './UserProfile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhoneAlt} from 'react-icons/fa';
import { FaEnvelope} from 'react-icons/fa';

const UserProfile = () => {
  return (
    <div className="container">
      <div className="main-body">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img 
                    src="https://bootdey.com/img/Content/avatar/avatar6.png" 
                    alt="Admin" 
                    className="rounded-circle p-1 bg-primary" 
                    width="110" 
                  />
                  <div className="mt-3">
                    <h4>John Doe</h4>
                    <p className="text-secondary mb-1">Full Stack Developer</p>
                    <p className="text-secondary mb-1">Mumbai, Maharashtra</p>
                    
                  </div>
                </div>
                <hr className="my-4" />
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
      <h6 className="mb-0">
        <FaPhoneAlt className="me-2" /> 
        Phone
      </h6>
      <span className="text-secondary"> (239) 816-9029</span>
    </li>
    <br></br>
    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
      <h6 className="mb-0">
        <FaEnvelope className="me-2" /> 
        Email
      </h6>
      <span className="text-secondary">john@gmail.com</span>
    </li>
                  

              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="card">
              <div className="card-body">
                <div className="row mb-3">
                <center><h5>Personal Information</h5></center>
                <br></br>
                  <div className="col-sm-3">
                 
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className="form-control" value="John Doe" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className="form-control" value="john@example.com" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className="form-control" value="(239) 816-9029" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Age</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className="form-control" value="25" />
                  </div>
                </div>
               
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className="form-control" value="Bay Area, San Francisco, CA" />
                  </div>
                </div>
             <hr></hr>

             <div className="row mb-3">
             <center><h5>Educational Information</h5></center>
                <br></br>
              <div className="col-sm-3">
                <h6 className="mb-0">Undergraduate Degree</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <input type="text" className="form-control" value="BTECH" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-3">
                <h6 className="mb-0">Undergraduate Specialization</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <input type="text" className="form-control" value="Web Development" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-3">
                <h6 className="mb-0">Year of Passing</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <input type="text" className="form-control" value="2022" />
              </div>
            </div>
          
            <div className="row mb-3">
              <div className="col-sm-3">
                <h6 className="mb-0">Postgraduate Degree</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <input type="text" className="form-control" value="MTECH" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-3">
                <h6 className="mb-0">Postgraduate Specialization</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <input type="text" className="form-control" value="Web Development" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-3">
                <h6 className="mb-0">Year of Passing</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <input type="text" className="form-control" value="2024" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-3">
                <h6 className="mb-0">Postgraduate College Name</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <input type="text" className="form-control" value="VJTI" />
              </div>
            </div>


            <hr></hr>
            <div className="row mb-3">
            <center><h5>Professional Information</h5></center>
              <br></br>
             <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Experience</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className="form-control" value="4 years" />
                  </div>
                </div>
            
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Previous Company</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className="form-control" value="Accenture" />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Current Company</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className="form-control" value="Wipro" />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Joining Date</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className="form-control" value="12-09-2023" />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Job Type</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className="form-control" value="Web Developer" />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Salary</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className="form-control" value="4.66lakh/anum" />
                  </div>
                </div>
               <center> <button className="btn btn-primary">Save changes</button> <space></space>
                    <button className="btn btn-outline-primary">Cancel</button>
                    </center> </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default UserProfile;
