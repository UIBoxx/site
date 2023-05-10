import "../CSS/tutorial.css";

function Tutorials() {
  const tutorials = [
    {
      title: "Binary Search",
      description: "Working of Binary Search with Visualization",
      link: '/binary-search-tutorial'
    },
  ];

  return (
    <div className="tutorial-body">
      {tutorials.map((tutorial, index) => (
        <div className="content-card" key={index}>
          <div className="image-demo">
            <h1>{tutorial.title}</h1>
          </div>
          <div className="title-head">
            <h2>{tutorial.description}</h2>
            <div className="action-area">
              <a href={tutorial.link}>Learn</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tutorials;
