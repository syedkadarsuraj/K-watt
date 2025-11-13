import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import Img4 from '../assets/images/Master.png';
import Img5 from '../assets/images/Iddero.png';
import Img1 from '../assets/images/img1.jpg';
import Img2 from '../assets/images/img2.jpg';
import Img3 from '../assets/images/img3.jpg';

const partners = [
  {
    name: 'Master Electric & Electronic',
    logo: Img4,
    description:
      'In our website, visitors can find about new products and all of the latest information of our activities. We are able to satisfy any of your demands…',
    website: 'https://master-electric.gr/en',
  },
  {
    name: 'Iddero',
    logo: Img5,
    description:
      'Iddero is a manufacturer of high quality, innovative products for home and building automation based on the KNX standard. Iddero products combine the latest technological advances, a strong and robust design, and elegant and attractive aesthetics.',
    website: 'https://www.iddero.com/en/',
  },
];

function Home() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [partnersVisible, setPartnersVisible] = useState(false);

  const featuresRef = useRef(null);
  const partnersRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setHeroVisible(true);
  }, []);

  // Intersection Observer utility
  const observeSection = (ref, setter) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setter(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  };

  useEffect(() => observeSection(featuresRef, setFeaturesVisible), []);
  useEffect(() => observeSection(partnersRef, setPartnersVisible), []);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section
        id="home"
        className={`hero ${heroVisible ? 'visible' : ''}`}
        style={{
          backgroundImage: `url(${Img1})`,
        }}
      >
        <div className="hero-overlay"></div>

        <div className="container hero-inner">
          <div className="hero-copy">
            <h1
              className={`fade-in-hero ${heroVisible ? 'visible' : ''}`}
            >
              Your Space Can Now Listen, Learn and Respond!
            </h1>
            <p
              className={`lead fade-in-hero ${heroVisible ? 'visible' : ''}`}
              style={{ transitionDelay: '200ms' }}
            >
              Smart home & building automation solutions that make everyday living intelligent, efficient and secure.
            </p>
            <Link
              className={`btn fade-in-hero ${heroVisible ? 'visible' : ''}`}
              style={{ transitionDelay: '400ms' }}
              to="/products"
            >
              Our Products
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section
        ref={featuresRef}
        className={`features fade-in-section ${featuresVisible ? 'visible' : ''}`}
      >
        <div className="feature-block">
          <div className="text">
            <h1>Innovative Solutions</h1>
            <p>
              At Kilowatt Electric, we specialize in smart home and building automation solutions designed to make everyday
              living more intelligent, efficient, and secure. Our systems seamlessly integrate lighting, climate control,
              security, entertainment, energy management, and more—delivering unmatched convenience and control at your
              fingertips.
            </p>
          </div>
          <img src={Img2} alt="Modern Kitchen" />
        </div>

        <div className="feature-block reverse">
          <img src={Img3} alt="Dining Room" />
          <div className="text">
            <h1>Seamless Integration</h1>
            <p>
              Whether it’s a private home, commercial space, hotel, or healthcare facility, we customize each solution to
              suit your unique needs, ensuring comfort, sustainability, and future-ready technology. With a focus on
              intuitive design and reliable performance, we help you create smarter spaces that adapt to your lifestyle or
              business operations—while reducing energy costs and increasing property value.
            </p>
          </div>
        </div>
      </section>

      {/* ===== PARTNERS SECTION ===== */}
      <section
        ref={partnersRef}
        className={`partners-section fade-in-section ${partnersVisible ? 'visible' : ''}`}
      >
        <div className="container">
          <h2 className="section-title">Our Partners</h2>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`partner-card fade-in-card ${partnersVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img src={partner.logo} alt={partner.name} />
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
                <a
                  className="know-more-btn"
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Know More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
