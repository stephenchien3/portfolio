export default function Home() {
  return (
    <main className="home-container">
      <div className="home-layout">
        <div className="home-content">
          <h1 className="site-title">stephen chien</h1>
          <div className="tree">
            <div className="tree-item">
              <span>links</span>
              <span className="desc">
                <a href="https://github.com/stephenchien3" target="_blank" rel="noopener noreferrer">github</a>
                {', '}
                <a href="https://linkedin.com/in/stephenlchien" target="_blank" rel="noopener noreferrer">linkedin</a>
                {', '}
                <a href="mailto:slc292@cornell.edu">email</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
