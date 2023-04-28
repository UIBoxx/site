import { useState, useEffect } from "react";
import "../CSS/main.css";
import Loading from "../assets/loading.gif";


interface Project {
  title: string;
  image: string;
  type: string;
  link: string;
  action: string;
  language: string;
}

function MyProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
        const fetchData = async () => {
          setIsLoading(true);
          try {
            // Add a 0.1 second delay
            await new Promise(resolve => setTimeout(resolve, 100));
      
            const response = await fetch("https://heypro.onrender.com/projects");
            const data = await response.json();
            setProjects(data);
            setIsLoading(false);
          } catch (error) {
            console.error(error);
            setIsLoading(false);
          }
        };
        fetchData();
      }, []);


  const handleSearchInputChange = (
    event: React.SyntheticEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.currentTarget.value);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="projects-body">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search . . . . ."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      {isLoading ? (
        <div className="loading-icon"><img src={Loading} alt="" /></div>
      )
       :(
      <div className="project-cards">
        {filteredProjects.map((project) => (
          <div key={project.title} className="project-card">
            <img src={`data:image/png;base64, ${project.image}`} alt="" />
            <h3>{project.title}</h3>
            <a href={project.link}>{project.action}</a>
          </div>
        ))}
      </div>)}
    </div>
  );
}

export default MyProjects;
