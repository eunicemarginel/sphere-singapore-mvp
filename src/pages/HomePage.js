import React from 'react';

const HomePage = () => {
  // Sample data for job postings and announcements
  const jobPostings = [
    {
      id: 1,
      title: 'Security Officer',
      agency: 'ABC Security Services',
      location: 'Singapore',
      salary: '$2,500 - $3,000',
      description: 'Looking for a licensed security officer to work at a commercial building in Singapore.'
    },
    {
      id: 2,
      title: 'Senior Security Supervisor',
      agency: 'XYZ Security Agency',
      location: 'Singapore',
      salary: '$3,500 - $4,000',
      description: 'Experienced security supervisor needed for managing a team at a residential complex.'
    },
    {
        id: 3,
        title: 'Senior Security Officer',
        agency: 'Hello Security Agency',
        location: 'Singapore',
        salary: '$120 - $150',
        description: 'Immediate Adhoc Security. Construction site'
      }
  ];

  const announcements = [
    {
      id: 1,
      title: 'New Regulations on Security Licensing',
      date: '2024-08-01',
      content: 'The Ministry of Manpower has announced new regulations regarding security licensing effective from September 2024...'
    },
    {
      id: 2,
      title: 'Mandatory Training for All Security Officers',
      date: '2024-07-20',
      content: 'PLRD has made it mandatory for all security officers to undergo a new training program starting in October 2024...'
    },
    {
        id: 3,
        title: 'PWM Salary 2025',
        date: '2024-08-29',
        content: 'Security Industry continues to support to help grow the aging growth of Security officers in Singapore...'
      }
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Welcome to Sphere Singapore</h1>

      <div className="row">
        <div className="col-md-8">
          <h2>Security Job Postings</h2>
          {jobPostings.map(job => (
            <div key={job.id} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{job.agency}</h6>
                <p className="card-text"><strong>Location:</strong> {job.location}</p>
                <p className="card-text"><strong>Salary:</strong> {job.salary}</p>
                <p className="card-text">{job.description}</p>
                <a href="#" className="card-link">Apply Now</a>
              </div>
            </div>
          ))}
        </div>

        <div className="col-md-4">
          <h2>Announcements</h2>
          {announcements.map(announcement => (
            <div key={announcement.id} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{announcement.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{announcement.date}</h6>
                <p className="card-text">{announcement.content}</p>
                <a href="#" className="card-link">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
