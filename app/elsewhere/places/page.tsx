import Link from 'next/link';
import BackButton from '../../components/BackButton';

export default function Places() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/elsewhere">elsewhere</Link>
        <span>/</span>
        <span>places</span>
      </div>

      <BackButton />

      <h1 className="page-title">places</h1>
      <p className="page-desc">where i have been</p>

      <div className="tree">
        <div className="tree-item">
          <span>arcadia, california</span>
          <span className="desc">where i grew up</span>
          <div className="detail-content" style={{ marginTop: '0.5rem', marginLeft: '0' }}>
            <p style={{ fontSize: '0.9em', color: '#aaa' }}>
              Suburb of Los Angeles, in the San Gabriel Valley. Known for the Santa Anita racetrack and the Los Angeles 
              Arboretum. The mall is nice too. 
            </p>
          </div>
        </div>
        <div className="tree-item">
          <span>the bronx</span>
          <span className="desc">riverdale</span>
          <div className="detail-content" style={{ marginTop: '0.5rem', marginLeft: '0' }}>
            <p style={{ fontSize: '0.9em', color: '#aaa' }}>
              Moved here around 11.
            </p>
          </div>
        </div>
        <div className="tree-item">
          <span>manhattan</span>
          <span className="desc">upper west side, where i currently reside</span>
              <div className="detail-content" style={{ marginTop: '0.5rem', marginLeft: '0' }}>
            <p style={{ fontSize: '0.9em', color: '#aaa' }}>
              I like the city. 
            </p>
          </div>
        </div>
        <div className="tree-item">
          <span>ithaca, ny</span>
          <span className="desc">college</span>
          <div className="detail-content" style={{ marginTop: '0.5rem', marginLeft: '0' }}>
            <p style={{ fontSize: '0.9em', color: '#aaa' }}>
              solid place. 
            </p>
          </div>
        </div>
        <div className="tree-item">
          <span>indianapolis, indiana</span>
          <span className="desc">summer running</span>
          <div className="detail-content" style={{ marginTop: '0.5rem', marginLeft: '0' }}>
            <p style={{ fontSize: '0.9em', color: '#aaa' }}>
              Spent a summer here. Ran six miles every day.
            </p>
          </div>
        </div>
        <div className="tree-item">
          <span>newark, nj</span>
          <span className="desc">stayed inside</span>
          <div className="detail-content" style={{ marginTop: '0.5rem', marginLeft: '0' }}>
            <p style={{ fontSize: '0.9em', color: '#aaa' }}>
              Newark was not nice. I just stayed inside.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
