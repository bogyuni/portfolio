import { useState, useEffect } from 'react';

const images = import.meta.glob('../assets/images/business/*', { eager: true, import: 'default' });

function Business() {
  const [data, setData] = useState([]);

  useEffect(() => {
    import('../data/Business.json').then((res) => setData(res.default));
  }, []);

  return (
    <>
      {data.map((item, index) => (
        <section className="year-section" key={index}>
          <h2>{item.year}</h2>
          <ul>
            {item.projects.map((project, idx) => {
              const imageSrc = images[`../assets/images/business/${project.image}`] || null;
              return (
                <li key={idx} data-aos="fade-up">
                  {imageSrc ? (
                    <figure className="img-con">
                      <img src={imageSrc} alt={project.title} />
                    </figure>
                  ) : (
                    <div className="img-none">Image None</div>
                  )}
                  <div className="details-con">
                    <div className="tit-con">
                      {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          {project.title}
                          <span className="material-symbols-outlined">open_in_new</span>
                        </a>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </div>
                    <p>{project.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </>
  );
}

export default Business;
