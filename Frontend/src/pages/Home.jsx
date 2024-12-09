import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const Home = () => {
  const turfs = [
    {
      id: '1',
      name: 'Premier Turf',
      description: 'Professional grade synthetic turf with floodlights',
      pricePerHour: 500,
      image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=800',
            available: true,
    },
    {
      id: '2',
      name: 'Elite Arena',
      description: 'High-quality turf for tournaments and competitive games',
      pricePerHour: 600,
      image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&q=80&w=800',
            available: true,
    },
    {
      id: '3',
      name: 'Champion Field',
      description: 'Perfect for night matches with premium lighting',
      pricePerHour: 750,
      image: 'https://media.istockphoto.com/id/481211992/photo/cricket-ball.jpg?s=612x612&w=0&k=20&c=5V53FbwHu1KOXWQUu4zFLxYcjL2MNfZgkd3oTB02VdM=',
      available: true,
    },
    {
      id: '4',
      name: 'Grand Playfield',
      description: 'Spacious turf ideal for large team games',
      pricePerHour: 500,
      image: 'https://media.istockphoto.com/id/2166307492/photo/football-on-the-football-field-and-grass.jpg?s=612x612&w=0&k=20&c=bzaC1_TehtBPBU2bpve5qF2rZsPPgjWcMv_ZlSJ6kjw=',
      available: true,
    },
    {
      id: '5',
      name: 'Supreme Arena',
      description: 'Top-tier facilities for professional events',
      pricePerHour: 650,
      image: 'https://media.istockphoto.com/id/2149928653/photo/drone-view-of-football-turf.jpg?s=612x612&w=0&k=20&c=aT7bkK41xRjbk3jCc8UAqJZRTHHAfVVD0eb_dBi7jXw=',
      available: true,
    },
    {
      id: '6',
      name: 'Exclusive Turf',
      description: 'Luxurious turf with VIP amenities',
      pricePerHour: 900,
      image: 'https://media.istockphoto.com/id/1294407182/photo/playing-field.jpg?s=612x612&w=0&k=20&c=1F4AdnH6Muyc7cJKB2h4yvfnRMxCmzsQ6x6HuwnvVOw=',
      available: true,
    },
    {
      id: '7',
      name: 'Pro League Field',
      description: 'Tournament-ready turf with state-of-the-art features',
      pricePerHour: 700,
      image: 'https://media.istockphoto.com/id/983979694/photo/corner-line-of-an-indoor-football-soccer-training-field.jpg?s=612x612&w=0&k=20&c=1LljSla_DxIqNulQtAap1OAndN9KGD_gb67SZy4sh8A=',
      available: true,
    },
    {
      id: '8',
      name: 'Stadium Turf',
      description: 'Experience a stadium-like feel for every game',
      pricePerHour: 800,
      image: 'https://media.istockphoto.com/id/1361904816/photo/soccer-field-with-line-marking-football-field-behind-goal-scene-of-greenfield-in-a-football.jpg?s=612x612&w=0&k=20&c=IV5kwO81lTkwPiTofa8T9Br42kM-GrsZ0MLr68FkAfw=',
      available: true,
    },
  ];
  
  

  return (
    <div>
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: '#2d3748', marginBottom: '1rem' }}>
          Book Your Perfect Turf
        </h1>
        <p style={{ color: '#718096', maxWidth: '32rem', margin: '0 auto' }}>
          Find and book the best football turfs in your area. Whether you're planning a casual game or a tournament, we've got you covered.
        </p>
      </section>

      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {turfs.map((turf) => (
          <div key={turf.id} style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
            <img
              src={turf.image}
              alt={turf.name}
              style={{ width: '100%', height: '12rem', objectFit: 'cover' }}
            />
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2d3748', marginBottom: '0.5rem' }}>
                {turf.name}
              </h3>
              <p style={{ color: '#718096', marginBottom: '1rem' }}>{turf.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', color: '#718096' }}>
                  <Clock style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
                  <span>₹{turf.pricePerHour}/hour</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', color: '#718096' }}>
                  <Calendar style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
                  <span>Available Now</span>
                </div>
              </div>
              <button style={{ width: '100%', backgroundColor: '#3182ce', color: 'white', padding: '0.5rem', borderRadius: '0.375rem', transition: 'background-color 0.2s' }}>
                Chat & Book It
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
