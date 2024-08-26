import React, { useState } from 'react';
import projects from './data'; // Ensure this is the correct path to your data file

const Portfolio = () => {
  const [category, setCategory] = useState('All');

  const filterCategory = (category) => {
    if (category === 'All') {
      return projects;
    }
    return projects.filter((project) => project.type === category);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const data = filterCategory(category);

  return (
    <div>
      <div className="TopSection">
        <h1>Portfolio</h1>
        <div className="coloredSeparator"></div>
      </div>

      <div className="PortfolioSection">
        
        <nav className="Nav">
          <a href="#" onClick={() => setCategory('All')}>All</a>
          <a href="#" onClick={() => setCategory('Web Design')}>Web Design</a>
          <a href="#" onClick={() => setCategory('Web Development')}>Web Development</a>
        </nav>

        {/* Dropdown for screens narrower than 700px */}
        <nav className="mobileNav">
          <select onChange={handleCategoryChange} value={category}>
            <option value="All">All</option>
            <option value="Web Design">Web Design</option>
            <option value="Web Development">Web Development</option>
          </select>
        </nav>
        
        <ProjectDisplay data={data} />
      </div>
    </div>
  );
};

const ProjectDisplay = ({ data }) => {
  return (
    <div className="ProjectBox">
      {data.map((project, index) => (
        <div className="projectbox" key={index}>
          <div className="ProjectImage">
            <img src={project.img} alt={project.name} />
          </div>
          <p className="ProjectName">{project.name}</p>
          <p className="ProjectType">{project.type}</p>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
