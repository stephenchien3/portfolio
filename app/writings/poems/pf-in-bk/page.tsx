import Link from 'next/link';
import BackButton from '../../../components/BackButton';

export default function PfInBk() {
  return (
    <main className="page-container">
      <div className="breadcrumb">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/writings">writings</Link>
        <span>/</span>
        <Link href="/writings/poems">poems</Link>
        <span>/</span>
        <span>PF IN BK ON THR</span>
      </div>

      <BackButton />

      <h1 className="page-title">PF IN BK ON THR</h1>

      <div className="detail-content" style={{ lineHeight: '1.8' }}>
        <p style={{ whiteSpace: 'pre-line' }}>
{`I love Planet Fitness in Brooklyn,

its a collection of people who you'd never interact with

except on a last name basis, but are weirdly connected

hasidic jews on the smith machine and angsty teenagers doing pull-ups

and treadmill-walking asian grandmas where

it is a 'judgement free' zone but

people got to go places and

if you're doing more than three sets you gotta go,

the upstairs floor is too hot because of that

one dude with his tank top on sweating bullets, and

ofc the tv only plays that one channel that advertises a murder in the bronx,

and who would want to see that when they are working out?

Then you start to wonder why everyone is here and

who the fuck works out on a thursday at eleven am

except for the unemployed and the elderly and students on break`}
        </p>
      </div>
    </main>
  );
}
