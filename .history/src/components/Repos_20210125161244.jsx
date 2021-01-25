export const Repos = ({repos}) => (
  <>
    {repos.map(rep => (
      <div className="card mb-3" key={rep.id}>
        <div className="card-body">
          <h5>
            <a href={rep.html_url} target="_blank" rel="noreferrer">
              {rep.name}
            </a>
          </h5>
        </div>
      </div>
    ))}
  </>
)