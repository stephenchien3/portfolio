import Link from 'next/link';
import BackButton from '../../../components/BackButton';

export default function Gao() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/research">people</Link>
        <span>/</span>
        <Link href="/research/labs">labs</Link>
        <span>/</span>
        <span>gao</span>
      </div>

      <BackButton />

      <h1 className="page-title">gao research lab</h1>
      <p className="page-desc">infrastructure systems</p>

      <div className="detail-content">
        <h3>digital twin ports</h3>

        <p>
          A digital twin is a virtual replica of a physical system, updated in real time
          with sensor data, used to simulate, predict, and optimize operations.
        </p>

        <p>
          Worked on Unity models for digital twin ports for the Twin Cities. The models
          visualize port infrastructure, simulate logistics flows, and help planners
          understand how changes to the physical system would affect operations.
        </p>
      </div>
    </main>
  );
}
