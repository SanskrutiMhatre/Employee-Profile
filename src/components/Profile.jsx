import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Profiles.css';

const Profiles = () => {
  const { contactNo } = useParams();
  const [userDetails, setUserDetails] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/user-details/${contactNo}`);
        setUserDetails(response.data);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [contactNo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(`http://localhost:3001/api/update-user-details/${contactNo}`, formData);
      setUserDetails(formData);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  };

  const handleCancel = () => {
    setFormData(userDetails);
    setIsEditing(false);
  };

  return (
    <div className="container">
      <div className="main-body">
        <div className="scrollable-container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card profile-widget">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar6.png"
                      alt="Admin"
                      className="rounded-circle p-1 bg-primary avatar"
                    />
                    <div className="mt-3">
                      <h4>{userDetails.Name}</h4>
                      <p className="text-secondary mb-1">{userDetails.Role}</p>
                      <p className="text-secondary mb-1">{userDetails.current_location}</p>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <FaPhoneAlt className="me-2" />
                      Phone
                    </h6>
                    <span className="text-secondary">{userDetails.contact_no}</span>
                  </li>
                  <br />
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">
                      <FaEnvelope className="me-2" />
                      Email
                    </h6>
                    <span className="text-secondary">{userDetails.email_id}</span>
                  </li>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="card profile-widget">
                <div className="card-body">
                  {isEditing ? (
                    <>
                    <div className='head'>
                    <h5>Personal Information</h5>
                    </div>
                      <div className="row mb-3">  
                        <div className="col-sm-3">
                          <h6 className="mb-0">Full Name</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control" name="Name" value={formData.Name} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Email</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control" name="email_id" value={formData.email_id} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Phone</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control" name="contact_no" value={formData.contact_no} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Age</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control" name="Age" value={formData.Age} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Address</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control" name="current_location" value={formData.current_location} onChange={handleInputChange} />
                        </div>
                      </div>
                      <hr />
                      <div className='head'>
                    <h5>Educational Information</h5>
                    </div>
                      <div className="row mb-3">                     
                        <div className="col-sm-3">
                          <h6 className="mb-0">Undergraduate Degree</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control" name="ug_degree" value={formData.ug_degree} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Undergraduate Specialization</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control" name="ug_specialization" value={formData.ug_specialization} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Year of Passing</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control" name="ug_year" value={formData.ug_year} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Postgraduate Degree</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control" name="pg_degree" value={formData.pg_degree} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Postgraduate Specialization</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control" name="pg_specialization" value={formData.pg_specialization} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Year of Passing</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control" name="pg_yeat" value={formData.pg_yeat} onChange={handleInputChange} />
                        </div>
                      </div>
                      <hr />
                    <div className='head'>
                    <h5>Professional Information</h5>
                    </div>
                      <div className="row mb-3">
                    
                        <div className="col-sm-3">
                          <h6 className="mb-0">Previous Company</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control" name="prev_employer_name" value={formData.prev_employer_name} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Experience</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control" name="years_of_experience" value={formData.years_of_experience} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Current Company</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control" name="curr_company_name" value={formData.curr_company_name} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Joining Date</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control" name="curr_company_duration_from" value={formData.curr_company_duration_from} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Job Type</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control" name="curr_company_designation" value={formData.curr_company_designation} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Salary</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input type="text" className="form-control" name="ann_salary" value={formData.ann_salary} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 text-end">
                          <button className="btn btn-primary" onClick={handleSaveChanges}>Save Changes</button>
                          <button className="btn btn-secondary ms-2" onClick={handleCancel}>Cancel</button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                    <div className='head'>
                    <h5>Personal Information</h5>
                    </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Full Name</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{userDetails.Name}</p>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Email</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{userDetails.email_id}</p>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Phone</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{userDetails.contact_no}</p>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Age</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{userDetails.Age}</p>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Address</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{userDetails.current_location}</p>
                        </div>
                      </div>
                      <hr />
                      <div className='head'>
                    <h5>Educational Information</h5>
                    </div>
                      <div className="row mb-3">       
                        <div className="col-sm-3">
                          <h6 className="mb-0">Undergraduate Degree</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{userDetails.ug_degree}</p>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Undergraduate Specialization</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{userDetails.ug_specialization}</p>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Year of Passing</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{userDetails.ug_year}</p>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Postgraduate Degree</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{userDetails.pg_degree}</p>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Postgraduate Specialization</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{userDetails.pg_specialization}</p>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Year of Passing</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{userDetails.pg_yeat}</p>
                        </div>
                      </div>
                      <hr />
                      <div className='head'>
                    <h5>Professional Information</h5>
                    </div>
                      <div className="row mb-3">                     
                        <div className="col-sm-3">
                          <h6 className="mb-0">Previous Company</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{userDetails.prev_employer_name}</p>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Experience</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{userDetails.years_of_experience}</p>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Current Company</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{userDetails.curr_company_name}</p>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Joining Date</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{userDetails.curr_company_duration_from}</p>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Job Type</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{userDetails.curr_company_designation}</p>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-sm-3">
                          <h6 className="mb-0">Salary</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <p>{userDetails.ann_salary}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 text-end">
                    
                          <button className="btn btn-primary" onClick={() => setIsEditing(true)}>Edit</button>
                      
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
