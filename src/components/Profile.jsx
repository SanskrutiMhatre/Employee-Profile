// src/components/Profile.jsx

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';

const Profile = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card profile-widget">
            <div className="card-header text-center">
              <div className="image-container">
                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="avatar" alt="avatar" />
              </div>
              <h4>John Doe <i className="fa fa-shield"></i></h4>
              <p className="text-secondary mb-1">Full Stack Developer</p>
              <p className="text-secondary mb-1">Mumbai, Maharashtra</p>
              <div className="mt-3">
              <center>  <a href="/UserProfile" className="btn btn-success">Edit</a></center>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card profile-widget">
            <div className="card-header">
              <h5 className="card-title">Personal Information</h5>
            </div>
            <div className="card-body">
              <p><strong>Full Name: </strong>John A. Doe</p>
              <p><strong>Email: </strong>spam@ztapps.com</p>
              <p><strong>Phone Number: </strong>(123) 456 - 7890</p>
              <p><strong>Age: </strong>25</p>
              <p><strong>Address: </strong>46 Gray's Inn Rd, London, WC1X 8LP</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card profile-widget">
            <div className="card-header">
              <h5 className="card-title">Educational Information</h5>
            </div>
            <div className="card-body">
              <p><strong>Undergraduate Degree: </strong>BTECH</p>
              <p><strong>Undergraduate Specialization: </strong>Web Development</p>
              <p><strong>Year of Passing: </strong>2022</p>
              <p><strong>Postgraduate Degree: </strong>MTECH</p>
              <p><strong>Postgraduate Specialization: </strong>Web Development</p>
              <p><strong>Year of Passing: </strong>2024</p>
              <p><strong>Postgraduate College Name: </strong>VJTI</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card profile-widget">
            <div className="card-header">
              <h5 className="card-title">Professional Information</h5>
            </div>
            <div className="card-body">
              <p><strong>Experience: </strong>4 Years</p>
              <p><strong>Previous Company: </strong>Accenture</p>
              <p><strong>Current Company: </strong>Wipro</p>
              <p><strong>Joining Date: </strong>12-09-2023</p>
              <p><strong>Job Type: </strong>Web Developer</p>
              <p><strong>Salary: </strong>4.66lakh/anum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
