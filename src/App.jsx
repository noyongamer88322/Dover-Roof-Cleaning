import { useEffect, useState, useRef } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './styles.css'
import {
  FiChevronDown,
  FiMenu,
  FiX,
  FiArrowUp,
  FiArrowUpRight,
  FiCalendar,
  FiUser,
  FiCheck,
  FiSun,
  FiDroplet,
  FiAlertCircle,
  FiPhone
} from 'react-icons/fi'
import {
  FaStar,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaQuoteLeft,
  FaHammer,
  FaWrench,
  FaShieldAlt,
  FaTools
} from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

// TOPBAR COMPONENT
function TopBar() {
  return (
    <div
      style={{
        background: '#060a14',
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '12px',
        padding: '10px 8%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        zIndex: 1001
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span>📍 Whitfield / Dover / Folkestone / Deal / Cheriton</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span>✉️ doverroofcleaning@.com</span>
        <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>|</span>
        <div style={{ display: 'flex', gap: '12px' }}>
          <a href="https://www.facebook.com/profile.php?id=61583118665114" target="_blank" style={{ color: 'inherit' }}><FaFacebookF /></a>
          <a href="https://linkedin.com" style={{ color: 'inherit' }}><FaLinkedinIn /></a>
          <a href="https://instagram.com" style={{ color: 'inherit' }}><FaInstagram /></a>
          <a href="https://youtube.com" style={{ color: 'inherit' }}><FaYoutube /></a>
        </div>
      </div>
    </div>
  )
}

// 1. NAVBAR COMPONENT
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen)

  const navLinks = [
    { name: 'Home', href: '#home', hasDropdown: true },
    { name: 'Pages', href: '#about', hasDropdown: true },
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'Projects', href: '#projects', hasDropdown: true },
    { name: 'Blogs', href: '#blog', hasDropdown: true }
  ]

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: isScrolled ? 0 : '38px',
          width: '100%',
          zIndex: 1000,
          transition: 'all 0.3s ease',
          background: isScrolled ? '#0a0f1e' : 'transparent',
          boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
          padding: isScrolled ? '14px 8%' : '22px 8%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {/* Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0052fe" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 20L12 4L22 20" />
            <path d="M7 20H17" />
          </svg>
          <span style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: '22px', color: '#fff' }}>
            Dover Roof Cleaning
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="navbar-links" style={{ display: 'flex', gap: '32px' }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name} {link.hasDropdown && <FiChevronDown style={{ fontSize: '12px', marginLeft: '2px' }} />}
            </a>
          ))}
        </div>

        {/* Right Phone Button (Desktop) */}
        <div className="navbar-phone" style={{ display: 'flex', alignItems: 'center' }}>
          <a href="tel:07903988852" className="btn-yellow" style={{ padding: '10px 22px', fontSize: '13px' }}>
            <FiPhone /> 07903 988852
          </a>
        </div>

        {/* Hamburger Icon */}
        <div
          className="hamburger"
          onClick={toggleDrawer}
          style={{
            cursor: 'pointer',
            fontSize: '24px',
            color: '#fff',
            display: 'none'
          }}
        >
          <FiMenu />
        </div>
      </nav>

      {/* CSS overrides for responsive navigation (injected for simplicity and reliability) */}
      <style>{`
        @media (max-width: 768px) {
          .navbar-links, .navbar-phone { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>

      {/* Mobile Navigation Drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: isDrawerOpen ? 0 : '-100%',
          width: '100%',
          height: '100vh',
          background: '#0a0f1e',
          zIndex: 1100,
          transition: 'all 0.5s cubic-bezier(0.77,0.2,0.05,1.0)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
          padding: '40px'
        }}
      >
        {/* Close Button */}
        <div
          onClick={toggleDrawer}
          style={{
            position: 'absolute',
            top: '24px',
            right: '8%',
            cursor: 'pointer',
            fontSize: '28px',
            color: '#fff'
          }}
        >
          <FiX />
        </div>

        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={toggleDrawer}
            style={{
              fontFamily: 'Montserrat',
              fontWeight: 800,
              fontSize: '24px',
              color: '#fff',
              letterSpacing: '0.05em'
            }}
          >
            {link.name}
          </a>
        ))}

        <a
          href="tel:07903988852"
          className="btn-yellow"
          onClick={toggleDrawer}
          style={{ marginTop: '20px' }}
        >
          <FiPhone /> 07903 988852
        </a>
      </div>
    </>
  )
}

// SVG Rotating Text Circle Badge Helper
function RotatingBadge({ text = "20+ YEARS EXPERIENCE •" }) {
  return (
    <div className="experience-badge">
      <div className="experience-text-ring">
        <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
          <path
            id="badgePath"
            d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            fill="none"
          />
          <text fill="#ffffff" fontSize="8" fontWeight="800" letterSpacing="0.08em">
            <textPath href="#badgePath">
              {text}
            </textPath>
          </text>
        </svg>
      </div>
      <div className="experience-center">
        <FiArrowUpRight style={{ fontSize: '18px' }} />
      </div>
    </div>
  )
}

// 2. HERO COMPONENT
function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [animateText, setAnimateText] = useState(true)

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1600',
      label: 'PROFESSIONAL ROOFING FOR SAFER, STRONGER HOMES',
      title: 'Top–Quality Roofing Services For Homes And Businesses.',
      description: 'Whether you need a quick repair or a full roof replacement, our expert team is here to deliver reliable results, affordable pricing.'
    },
    {
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600',
      label: 'EXPERT ROOFING SOLUTIONS YOU CAN TRUST',
      title: 'Protect Your Home With Premium Roofing Services.',
      description: 'From emergency repairs to complete installations, we provide comprehensive roofing solutions with exceptional craftsmanship and materials.'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateText(false)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        setAnimateText(true)
      }, 300)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroSlides.length])

  const nextSlide = () => {
    setAnimateText(false)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
      setAnimateText(true)
    }, 300)
  }

  const prevSlide = () => {
    setAnimateText(false)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
      setAnimateText(true)
    }, 300)
  }

  const currentSlideData = heroSlides[currentSlide]

  return (
    <section
      id="home"
      style={{
        height: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        background: `url("${currentSlideData.image}") no-repeat center center/cover`,
        overflow: 'hidden',
        transition: 'background-image 0.5s ease-in-out'
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(10,15,30,0.85) 0%, rgba(10,15,30,0.55) 100%)',
          zIndex: 1
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '820px',
          paddingLeft: '8%',
          paddingRight: '6%'
        }}
      >
        <span
          className="section-label"
          style={{
            display: 'inline-flex',
            color: '#fff',
            opacity: animateText ? 1 : 0,
            transform: animateText ? 'translateX(0)' : 'translateX(-20px)',
            transition: 'all 0.5s ease'
          }}
        >
          <span style={{ color: 'var(--accent)', marginRight: '6px' }}>⚡</span> {currentSlideData.label}
        </span>

        <h1
          style={{
            fontSize: 'clamp(36px, 5.5vw, 68px)',
            color: '#fff',
            lineHeight: 1.1,
            marginBottom: '20px',
            opacity: animateText ? 1 : 0,
            transform: animateText ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.5s ease 0.1s'
          }}
        >
          {currentSlideData.title}
        </h1>

        <p
          style={{
            fontSize: 'clamp(15px, 2vw, 18px)',
            color: 'rgba(255,255,255,0.75)',
            marginBottom: '36px',
            maxWidth: '600px',
            lineHeight: 1.6,
            opacity: animateText ? 1 : 0,
            transform: animateText ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.5s ease 0.2s'
          }}
        >
          {currentSlideData.description}
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            opacity: animateText ? 1 : 0,
            transform: animateText ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.5s ease 0.3s'
          }}
        >
          <a href="#contact" className="btn-yellow">
            REQUEST FREE ESTIMATE <span className="btn-icon-circle"><FiArrowUpRight /></span>
          </a>
          <a href="#contact" className="btn-outline">
            CONTACT US <span className="btn-icon-circle" style={{ background: '#fff', color: '#0a0f1e' }}><FiArrowUpRight /></span>
          </a>
        </div>
      </div>

      {/* Hero Slide controls */}
      <div
        style={{
          position: 'absolute',
          right: '40px',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          zIndex: 5
        }}
      >
        <button
          onClick={prevSlide}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: '#ffffff',
            color: '#0a0f1e',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            fontWeight: 800,
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            transition: 'all 0.3s ease'
          }}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: '#ffffff',
            color: '#0a0f1e',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            fontWeight: 800,
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            transition: 'all 0.3s ease'
          }}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>

      <style>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

// 3. ABOUT COMPONENT
function About() {
  return (
    <section id="about" className="section-container" style={{ background: 'var(--bg-light)' }}>
      <div className="grid-2">
        {/* Left Column: Image Stack */}
        <div
          data-aos="fade-right"
          style={{
            position: 'relative',
            height: '480px',
            width: '100%'
          }}
        >
          {/* Large Image */}
          <div
            style={{
              width: '75%',
              height: '85%',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800"
              alt="Roofing construction work"
              style={{ height: '100%', width: '100%' }}
            />
          </div>

          {/* Small Image Overlay */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              right: '5%',
              width: '45%',
              height: '55%',
              borderRadius: '12px',
              border: '6px solid var(--bg-light)',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400"
              alt="Installing new shingles"
              style={{ height: '100%', width: '100%' }}
            />
          </div>

          {/* Rotating Circular Experience Badge */}
          <div style={{ position: 'absolute', top: '40%', right: '25%' }}>
            <RotatingBadge text="• 20+ YEARS OF EXPERIENCE • DOVER ROOF CLEANING EXPERT " />
          </div>
        </div>

        {/* Right Column: Copy */}
        <div data-aos="fade-left" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <span className="section-label">ABOUT US</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', lineHeight: '1.2', color: 'var(--text-dark)' }}>
              Roofing Solutions That Stand The Test Of Time
            </h2>
          </div>

          <p style={{ color: 'var(--text-gray)', fontSize: '15px' }}>
            As certified roofing specialists for over 20 years, we offer a vast range of services from roofing, siding, framing, decking and more. Our contractors provide unrivaled experience in fiberglass, roof removal, historical restorations, and commercial roofing products.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: '#fff', background: 'var(--accent)', borderRadius: '50%', padding: '4px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '22px', height: '22px', flexShrink: 0 }}>
                <FiCheck style={{ fontSize: '12px' }} />
              </span>
              <span style={{ fontWeight: 600, color: 'var(--text-dark)' }}>Trusted Roofing Experts for Every Home & Business</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: '#fff', background: 'var(--accent)', borderRadius: '50%', padding: '4px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '22px', height: '22px', flexShrink: 0 }}>
                <FiCheck style={{ fontSize: '12px' }} />
              </span>
              <span style={{ fontWeight: 600, color: 'var(--text-dark)' }}>Professional Roofing with a Personal Touch</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ color: '#fff', background: 'var(--accent)', borderRadius: '50%', padding: '4px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '22px', height: '22px', flexShrink: 0 }}>
                <FiCheck style={{ fontSize: '12px' }} />
              </span>
              <span style={{ fontWeight: 600, color: 'var(--text-dark)' }}>The Roofing Experts You Can Rely On</span>
            </div>
          </div>

          <div style={{ marginTop: '10px' }}>
            <a href="#services" className="btn-yellow">
              LEARN MORE <span className="btn-icon-circle"><FiArrowUpRight /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// 4. MARQUEE COMPONENT
function Marquee() {
  const text = "ROOF INSTALLATION • ROOF REPLACEMENT • ROOFING SOLUTIONS • ROOFING SERVICES • TILE & SLATE ROOFING • GUTTER INSTALLATION • "
  const repeatText = `${text}${text}${text}`

  return (
    <section style={{ overflow: 'hidden' }}>
      {/* Row 1 scrolls Right to Left (Vibrant Blue Background) */}
      <div style={{ background: '#0052fe', padding: '16px 0' }}>
        <div className="marquee-row right-to-left">
          <div className="marquee-item" style={{ color: '#fff' }}>{repeatText}</div>
          <div className="marquee-item" style={{ color: '#fff' }}>{repeatText}</div>
        </div>
      </div>

      {/* Row 2 scrolls Left to Right (Dark Background) */}
      <div style={{ background: '#0a0f1e', padding: '16px 0' }}>
        <div className="marquee-row left-to-right">
          <div className="marquee-item" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>{repeatText}</div>
          <div className="marquee-item" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>{repeatText}</div>
        </div>
      </div>

      <style>{`
        .marquee-row {
          display: flex;
          width: max-content;
          white-space: nowrap;
          will-change: transform;
        }
        .right-to-left {
          animation: scrollLeft 15s linear infinite;
        }
        .left-to-right {
          animation: scrollRight 15s linear infinite;
        }
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-item {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
      `}</style>
    </section>
  )
}

// 5. SERVICES COMPONENT
function Services() {
  const serviceList = [
    {
      title: 'Gutter Installation Repair',
      img: '/images/img1.jpeg',
      icon: <FaTools />
    },
    {
      title: 'Roof Repair & Leak Fixing',
      img: '/images/img2.jpeg',
      icon: <FaWrench />
    },
    {
      title: 'Skylight Installation Repair',
      img: '/images/img3.jpeg',
      icon: <FiSun />
    },
    {
      title: 'Chimney Flashing Repair',
      img: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=600',
      icon: <FaHammer />
    },
    {
      title: 'Waterproofing & Coatings',
      img: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=600',
      icon: <FiDroplet />
    },
    {
      title: 'Emergency Roof Services',
      img: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600',
      icon: <FiAlertCircle />
    }
  ]

  return (
    <section id="services" className="section-container" style={{ background: 'var(--bg-light)' }}>
      <div data-aos="fade-down" style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span className="section-label">OUR SERVICES</span>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', color: 'var(--text-dark)' }}>Complete Roofing Solutions</h2>
      </div>

      <div className="grid-3">
        {serviceList.map((service, index) => (
          <div
            key={service.title}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="service-card"
            style={{
              position: 'relative',
              height: '280px',
              borderRadius: '12px',
              overflow: 'hidden',
              cursor: 'pointer',
              boxShadow: '0 8px 30px rgba(0,0,0,0.06)'
            }}
          >
            {/* Background Image */}
            <div className="service-img-wrapper" style={{ width: '100%', height: '100%', transition: 'transform 0.4s ease' }}>
              <img src={service.img} alt={service.title} style={{ width: '100%', height: '100%' }} />
            </div>

            {/* Dark Overlay */}
            <div
              className="service-overlay"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10,15,30,0.9) 0%, rgba(10,15,30,0.3) 60%)',
                transition: 'background 0.4s ease',
                zIndex: 2
              }}
            />

            {/* Content Bottom Left */}
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                zIndex: 3,
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <div
                style={{
                  background: '#ffffff',
                  color: 'var(--accent)',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}
              >
                {service.icon}
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#fff' }}>{service.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .service-card:hover .service-img-wrapper {
          transform: scale(1.08);
        }
        .service-card:hover .service-overlay {
          background: linear-gradient(to top, rgba(10,15,30,0.95) 0%, rgba(10,15,30,0.4) 60%);
        }
      `}</style>
    </section>
  )
}


// 7. PROJECTS COMPONENT
function Projects() {
  const projectList = [
    {
      title: 'Strength Style & Protection Our Completed Projects',
      location: 'Whitfield',
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600',
      subtitle: 'Premium residential shingle upgrade'
    },
    {
      title: 'Modern Classic Metal Roof Restoration Project',
      location: 'Dover',
      img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600',
      subtitle: 'Standing seam steel roofing implementation'
    },
    {
      title: 'Flat Commercial Roof Shielding & Leak Waterproofing',
      location: 'Folkestone',
      img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600',
      subtitle: 'Complete thermoplastic polyolefin overlay'
    }
  ]

  return (
    <section id="projects" className="section-container" style={{ background: 'var(--bg-light)' }}>
      <div data-aos="fade-down" style={{ marginBottom: '40px', textAlign: 'center' }}>
        <span className="section-label">OUR WORKS</span>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', color: 'var(--text-dark)' }}>Our Roofing Success Stories</h2>
      </div>

      {/* Grid Container - 3 items in one row */}
      <div className="grid-3">
        {projectList.map((project, index) => (
          <div
            key={project.title}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            style={{
              background: '#ffffff',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid var(--border-light)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}
          >
            {/* Top Image */}
            <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
              <img
                src={project.img}
                alt={project.title}
                style={{ width: '100%', height: '100%', transition: 'transform 0.3s ease' }}
                className="project-img"
              />
              <span
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'var(--accent)',
                  color: '#fff',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 800,
                  boxShadow: '0 4px 10px rgba(0,82,254,0.3)',
                  cursor: 'pointer'
                }}
              >
                ↗
              </span>
            </div>
            {/* Bottom Content */}
            <div style={{ padding: '24px' }}>
              <span
                style={{
                  color: 'var(--accent)',
                  fontWeight: 700,
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  marginBottom: '10px'
                }}
              >
                {project.location}
              </span>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-dark)' }}>
                {project.title}
              </h3>
              <p style={{ color: 'var(--text-gray)', fontSize: '13px' }}>{project.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .grid-3 > div:hover .project-img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  )
}

// 8. TESTIMONIALS COMPONENT (Auto-sliding horizontal carousel)
function Testimonials() {
  const testimonials = [
    {
      name: 'Iva Ryan',
      role: 'Homeowner',
      initials: 'IR',
      quote: '"From start to finish, the team at Dover Roof Cleaning Company exceeded our expectations. They were knowledgeable friendly & ensured our roof replacement was seamless."'
    },
    {
      name: 'Kurt Bates',
      role: 'Property Manager',
      initials: 'KB',
      quote: '"We had an excellent experience with when we needed to replace our roof. The entire team courteous respectful of our home & kept us informed during the process."'
    },
    {
      name: 'Katie Sims',
      role: 'Property Manager',
      initials: 'KS',
      quote: '"I\'m so impressed with the service from Roofing Services.They provided a thorough inspection, identified the issues with our roof, and had it fixed promptly. The workers were"'
    },
    {
      name: 'Iva Ryan',
      role: 'Homeowner',
      initials: 'IR',
      quote: '"From start to finish, the team at Dover Roof Cleaning Company exceeded our expectations. They were knowledgeable friendly & ensured our roof replacement was seamless."'
    },
    {
      name: 'Kurt Bates',
      role: 'Property Manager',
      initials: 'KB',
      quote: '"We had an excellent experience with when we needed to replace our roof. The entire team courteous respectful of our home & kept us informed during the process."'
    }
  ]

  const scrollRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollToSlide = (index) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild?.offsetWidth + 24 || 344
      scrollRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' })
      setCurrentIndex(index)
    }
  }

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        const cardWidth = scrollRef.current.firstChild?.offsetWidth + 24 || 344
        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        
        setCurrentIndex((prev) => {
          const nextIndex = prev + 1
          if (scrollRef.current.scrollLeft >= maxScroll - 10) {
            // Reached the end, smoothly scroll back to start
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
            return 0
          } else {
            // Scroll to next card
            scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' })
            return nextIndex
          }
        })
      }
    }

    const interval = setInterval(scroll, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="section-container" style={{ background: '#0a0f1e' }}>
      <div data-aos="fade-down" style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span className="section-label">TESTIMONIALS</span>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', color: '#fff' }}>What Our Clients Are Saying</h2>
      </div>

      {/* Auto-sliding Horizontal Scroll Carousel */}
      <div
        ref={scrollRef}
        className="testimonials-scroll"
        style={{
          display: 'flex',
          gap: '24px',
          overflowX: 'auto',
          paddingBottom: '30px',
          scrollSnapType: 'x mandatory'
        }}
      >
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            style={{
              minWidth: '320px',
              maxWidth: '380px',
              flex: '0 0 auto',
              background: '#ffffff',
              borderRadius: '12px',
              padding: '28px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              scrollSnapAlign: 'start'
            }}
          >
            <div>
              {/* 5 Stars */}
              <div style={{ display: 'flex', gap: '4px', color: '#ffb800', marginBottom: '16px', fontSize: '14px' }}>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
                {t.quote}
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: '#f3f4f6',
                    color: 'var(--text-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '14px'
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-dark)' }}>{t.name}</h4>
                  <p style={{ fontSize: '12px', color: '#6b7280' }}>{t.role}</p>
                </div>
              </div>
              <FcGoogle style={{ fontSize: '20px' }} />
            </div>
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToSlide(idx)}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: currentIndex === idx ? '#0052fe' : 'rgba(255, 255, 255, 0.3)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <style>{`
        .testimonials-scroll {
          scrollbar-width: none;
        }
        .testimonials-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

// 9. TEAM COMPONENT
function Team() {
  const teamList = [
    {
      name: 'John Anderson',
      role: 'Lead Roofer',
      img: 'https://images.unsplash.com/photo-1763665814605-a6489a3bf2a0?w=600&h=700&fit=crop'
    },
    {
      name: 'Michael Thompson',
      role: 'Roofing Specialist',
      img: 'https://images.unsplash.com/photo-1755168648692-ef8937b7e63e?w=600&h=700&fit=crop'
    },
    {
      name: 'Robert Martinez',
      role: 'Master Roofer',
      img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=700&fit=crop'
    }
  ]

  return (
    <section className="section-container" style={{ background: 'var(--bg-light)' }}>
      <div data-aos="fade-down" style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span className="section-label">OUR TEAM MEMBERS</span>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', color: 'var(--text-dark)' }}>Meet Our Expert Roofing Team</h2>
      </div>

      <div className="grid-3">
        {teamList.map((member, index) => (
          <div
            key={member.name}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="team-card"
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0,0,0,0.06)'
            }}
          >
            {/* Image Wrap */}
            <div className="team-img-container" style={{ borderRadius: '12px 12px 0 0' }}>
              <img
                src={member.img}
                alt={member.name}
                className="team-img"
                style={{ width: '100%', height: '100%', objectPosition: 'top' }}
              />
              <div className="team-social-overlay">
                <a href="https://facebook.com" className="team-social-icon"><FaFacebookF /></a>
                <a href="https://linkedin.com" className="team-social-icon"><FaLinkedinIn /></a>
                <a href="https://instagram.com" className="team-social-icon"><FaInstagram /></a>
                <a href="https://youtube.com" className="team-social-icon"><FaYoutube /></a>
              </div>
            </div>

            <div 
              className="team-info-container"
              style={{
                background: index < 2 ? '#0052fe' : '#e2e8f0',
                borderRadius: '0 0 12px 12px',
                marginTop: '0',
                padding: '24px'
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: index < 2 ? '#fff' : '#0f172a' }}>
                {member.name}
              </h3>
              <p style={{ fontSize: '13px', marginTop: '4px', color: index < 2 ? 'rgba(255,255,255,0.8)' : '#64748b' }}>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// 10. CONTACT COMPONENT
function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const formData = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      email: e.target[2].value,
      phone: e.target[3].value,
      clientType: e.target[4].value,
      message: e.target[5].value
    }

    const whatsappNumber = '447903988852'
    const text = `*New Contact Form Submission*%0A%0A*Name:* ${formData.firstName} ${formData.lastName}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Client Type:* ${formData.clientType === 'yes' ? 'New Client' : 'Returning Client'}%0A*Message:* ${formData.message}`
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`
    window.open(whatsappUrl, '_blank')
    
    e.target.reset()
  }

  return (
    <section id="contact" className="section-container" style={{ background: 'var(--bg-subtle)' }}>
      <div className="grid-2" style={{ alignItems: 'stretch' }}>
        {/* Left column: Google Map */}
        <div data-aos="fade-right" style={{ width: '100%', minHeight: '380px', height: '100%', position: 'relative' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d641548.5427406834!2d0.42375899224651403!3d51.08910329837481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f24e3ee7829499b%3A0x475a8594594fc13b!2sDover%20Roof%20Cleaning%20Company!5e0!3m2!1sen!2sbd!4v1782303366725!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '12px', minHeight: '400px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Google Maps Dover Roof Cleaning Company"
          />
        </div>

        {/* Right column: Form */}
        <div data-aos="fade-left" style={{ background: 'var(--bg-light)', padding: '36px', borderRadius: '12px', border: '1px solid var(--border-light)', boxShadow: '0 10px 35px rgba(0,0,0,0.05)' }}>
          <span className="section-label">CONTACT US</span>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)', color: 'var(--text-dark)', lineHeight: '1.2', marginBottom: '24px' }}>
            From Roof Repair to Full Replacement We Handle
          </h2>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Row 1 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>

            {/* Row 2 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
            </div>

            {/* Dropdown */}
            <select required style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', color: 'var(--text-dark)', padding: '14px 16px', borderRadius: '8px', width: '100%', outline: 'none' }}>
              <option value="" disabled selected>Are you a new client?</option>
              <option value="yes">Yes, I am a new client</option>
              <option value="no">No, I am a returning client</option>
            </select>

            {/* Textarea */}
            <textarea placeholder="How can we help you?" required style={{ height: '120px', background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', color: 'var(--text-dark)', padding: '14px 16px', borderRadius: '8px', width: '100%', outline: 'none', resize: 'none' }}></textarea>

            {/* Submit */}
            <button type="submit" className="btn-yellow" style={{ width: '100%', justifyContent: 'center' }}>
              SEND VIA WHATSAPP <span className="btn-icon-circle"><FiArrowUpRight /></span>
            </button>
          </form>
        </div>
      </div>

      <style>{`
        input {
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.08);
          color: var(--text-dark);
          padding: 14px 16px;
          border-radius: 8px;
          width: 100%;
          outline: none;
          font-family: 'Inter', sans-serif;
          transition: border-color 0.3s ease;
        }
        input:focus, select:focus, textarea:focus {
          border-color: var(--accent) !important;
        }
      `}</style>
    </section>
  )
}


// 12. FAQ COMPONENT
function FAQ() {
  const faqs = [
    {
      q: 'Will My Roof Increase My Home\'s Value?',
      a: 'We offer financing options to make roofing projects more affordable. Our team will work with you to find the best payment'
    },
    {
      q: 'Can You Repair A Roof In The Winter?',
      a: 'Yes, we can perform repairs and installations during winter months. However, specific asphalt shingles need warmer temperatures to self-seal correctly, so we employ specialized procedures.'
    },
    {
      q: 'What Should I Do If I Notice A Leak?',
      a: 'First, protect your interior items by catching the water. Contact us immediately for a professional emergency inspection to isolate the source and prevent underlying structural issues.'
    },
    {
      q: 'Can I Finance My Roofing Project?',
      a: 'Yes! Dover Roof Cleaning Company offers multiple flexible financing packages, including low-interest terms and monthly plans to fit every budget without hassle.'
    }
  ]

  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section-container" style={{ background: 'var(--bg-subtle)' }}>
      <div className="grid-2" style={{ alignItems: 'flex-start' }}>
        {/* Left Column */}
        <div data-aos="fade-right" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <span className="section-label">OUR FAQ</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', lineHeight: '1.2', color: 'var(--text-dark)' }}>
              Clear Answers to Your Roofing Questions
            </h2>
          </div>
          <p style={{ color: 'var(--text-gray)', fontSize: '15px' }}>
            We understand that getting a new roof or repairing an existing one is a big decision. To help guide you through the process.
          </p>
          <div style={{ marginTop: '10px' }}>
            <a href="#contact" className="btn-yellow">
              LEARN MORE <span className="btn-icon-circle"><FiArrowUpRight /></span>
            </a>
          </div>
        </div>

        {/* Right Column: Accordion */}
        <div data-aos="fade-left" style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex
            return (
              <div
                key={index}
                style={{
                  background: '#ffffff',
                  borderRadius: '8px',
                  padding: '18px 24px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                  borderBottom: '1px solid var(--border-light)'
                }}
              >
                {/* Question Row */}
                <div
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: '15px',
                      color: isOpen ? 'var(--text-dark)' : 'var(--text-dark)',
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {faq.q}
                  </span>
                  <FiChevronDown
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      color: 'var(--text-gray)',
                      fontSize: '18px'
                    }}
                  />
                </div>

                {/* Answer Paragraph */}
                <div
                  style={{
                    maxHeight: isOpen ? '120px' : '0px',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  <p style={{ color: 'var(--text-gray)', fontSize: '13.5px', marginTop: '14px', lineHeight: '1.6' }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// 13. BLOG COMPONENT
function Blog() {
  const blogs = [
    {
      title: 'Timely Tips, Seasonal Advice & Roofing News...',
      img: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600',
      date: '26 August 2025',
      author: 'Tabitha Howe',
      excerpt: 'We know that dealing with roofing problems can be stressful that\'s why'
    },
    {
      title: 'Explore, Learn & Protect Your Home – One Blog',
      img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600',
      date: '26 August 2025',
      author: 'Edith Murphy',
      excerpt: 'Our experts will assess your roof thoroughly, explain your options clearly'
    },
    {
      title: 'Guiding You Through Roof Repairs, Replacements',
      img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600',
      date: '26 August 2025',
      author: 'Darrell Blick',
      excerpt: 'A strong roof isn\'t just about durability it\'s about safety, comfort, long-term savings.'
    }
  ]

  return (
    <section id="blog" className="section-container" style={{ background: 'var(--bg-light)' }}>
      <div data-aos="fade-down" style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span className="section-label">OUR BLOG & NEWS</span>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', color: 'var(--text-dark)' }}>Everything Roofing Advice</h2>
      </div>

      <div className="grid-3">
        {blogs.map((blog, index) => (
          <article
            key={blog.title}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            style={{
              background: 'var(--bg-subtle)',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid var(--border-light)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer'
            }}
            className="blog-card"
          >
            {/* Image */}
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img
                src={blog.img}
                alt={blog.title}
                className="blog-img"
                style={{ width: '100%', height: '100%', transition: 'transform 0.4s ease' }}
              />
            </div>

            {/* Content */}
            <div style={{ padding: '24px' }}>
              <div style={{ display: 'flex', gap: '16px', color: 'var(--text-gray)', fontSize: '12px', marginBottom: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <FiCalendar /> {blog.date}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <FiUser /> {blog.author}
                </span>
              </div>

              <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '12px', lineHeight: '1.4' }}>
                {blog.title}
              </h3>

              <p style={{ color: 'var(--text-gray)', fontSize: '13.5px', lineHeight: '1.5' }}>
                {blog.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        .blog-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
        }
        .blog-card:hover .blog-img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  )
}

// 14. CTA BANNER COMPONENT
function CTABanner() {
  return (
    <section className="section-container" style={{ background: 'var(--bg-subtle)' }}>
      <div
        data-aos="fade-up"
        style={{
          background: 'var(--bg-dark)',
          borderRadius: '20px',
          padding: '60px 40px',
          boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center'
        }}
      >
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, marginBottom: '16px', color: '#fff', lineHeight: '1.2' }}>
          Get Your Roof Ready for Any Weather Book Your
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(15px, 2vw, 17px)', marginBottom: '32px', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto 32px' }}>
          Take the first step toward a safer, stronger home. Schedule your free roofing consultation now our friendly experts are just click
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          <a href="#contact" className="btn-yellow">
            SCHEDULE A CONSULTATION <span className="btn-icon-circle"><FiArrowUpRight /></span>
          </a>
          <button className="btn-outline" onClick={() => alert('Successfully subscribed!')}>
            SUBSCRIBE <span className="btn-icon-circle" style={{ background: '#fff', color: '#0a0f1e' }}><FiArrowUpRight /></span>
          </button>
        </div>
      </div>
    </section>
  )
}

// 15. FOOTER COMPONENT
function Footer() {
  return (
    <footer style={{ background: '#030712', color: '#fff', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      {/* 4-Column Grid */}
      <div
        style={{
          padding: '60px 8% 40px',
          display: 'grid',
          gridTemplateColumns: '2fr 1.2fr 1.2fr 1.6fr',
          gap: '40px'
        }}
        className="footer-grid"
      >
        {/* Column 1: Info */}
        <div data-aos="fade-up" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 20L12 4L22 20" />
              <path d="M7 20H17" />
            </svg>
            <span style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: '20px' }}>Dover Roof Cleaning</span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '13.5px', maxWidth: '300px' }}>
            At Dover Roof Cleaning Company we are committed to providing high-quality roofing services that ensure the safety.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--text-muted)', fontSize: '13px' }}>
            <span>📞 07903 988852</span>
            <span>📍 Whitfield / Dover / Folkestone / Deal / Cheriton</span>
            <span>✉️ support@doverroofcleaning.com</span>
          </div>
        </div>

        {/* Column 2: Top Links */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h4 className="footer-title">Top Links</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }} className="footer-links">
            <li><a href="#home">About US</a></li>
            <li><a href="#about">Our Service</a></li>
            <li><a href="#services">Recent Blog</a></li>
            <li><a href="#projects">Our Team</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h4 className="footer-title">Our Services</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }} className="footer-links">
            <li><a href="#services">Shield & Shine Roofing</a></li>
            <li><a href="#services">Home Guard Roofing</a></li>
            <li><a href="#services">Peak Protection</a></li>
            <li><a href="#services">Roof Repair</a></li>
            <li><a href="#services">Rain Proof Roofers</a></li>
          </ul>
        </div>

        {/* Column 4: Hours */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h4 className="footer-title">Working Hours</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: 'var(--text-muted)' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '6px', padding: '12px' }}>
              <p style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span>Mon-Wed</span>
                <span>8:00 AM - 7:00 PM</span>
              </p>
              <p style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span>Thu-Mon</span>
                <span>8:00 AM - 6:00 PM</span>
              </p>
              <p style={{ display: 'flex', justifyContent: 'space-between', color: '#EF4444', fontWeight: 600 }}>
                <span>Friday</span>
                <span>Full Day Closed</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright bar */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          padding: '24px 8%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}
        className="footer-bottom"
      >
        <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
          Copyright @2025 Dover Roof Cleaning Company. All Rights Reserved
        </span>

        {/* Social Icons */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <a href="https://facebook.com" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="https://instagram.com" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://youtube.com" className="social-icon" aria-label="YouTube"><FaYoutube /></a>
        </div>
      </div>

      <style>{`
        .footer-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 15px;
          margin-bottom: 20px;
          border-bottom: 2px solid var(--accent);
          display: inline-block;
          padding-bottom: 4px;
        }
        .footer-links a:hover {
          color: var(--accent);
          padding-left: 4px;
          transition: all 0.3s ease;
        }
        .social-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          background: var(--accent);
          color: #fff;
          transform: translateY(-2px);
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 550px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}

// 16. SLIDING DOT COMPONENT
function SlidingDot() {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '4px',
        background: '#0a1a2f',
        zIndex: 1000
      }}
    >
      <div
        style={{
          width: '60px',
          height: '100%',
          background: 'var(--accent)',
          borderRadius: '0 4px 4px 0',
          animation: 'slideDot 3s linear infinite',
          boxShadow: '0 0 20px rgba(0, 82, 254, 0.6)'
        }}
      />
      <style>{`
        @keyframes slideDot {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(calc(100vw + 100%));
          }
        }
      `}</style>
    </div>
  )
}

// 17. CONTACT TESTIMONIALS COMPONENT
function ContactTestimonials() {
  const scrollRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'John Smith',
      role: 'Verified Customer',
      initials: 'JS',
      rating: 5,
      date: '2 weeks ago',
      quote: 'Excellent service! The team was professional and completed the roof replacement on time. Highly recommend Dover Roof Cleaning Company for any roofing needs.'
    },
    {
      name: 'Emma Wilson',
      role: 'Verified Customer',
      initials: 'EW',
      rating: 5,
      date: '1 month ago',
      quote: 'Outstanding work on our commercial property. The attention to detail and quality of materials used exceeded our expectations.'
    },
    {
      name: 'David Brown',
      role: 'Verified Customer',
      initials: 'DB',
      rating: 5,
      date: '3 weeks ago',
      quote: 'Reliable, efficient, and affordable. They handled our emergency roof repair quickly and effectively. Great communication throughout.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Verified Customer',
      initials: 'SJ',
      rating: 5,
      date: '2 months ago',
      quote: 'Professional team, fair pricing, and excellent workmanship. Will definitely use their services again for future roofing needs.'
    },
    {
      name: 'Michael Chen',
      role: 'Verified Customer',
      initials: 'MC',
      rating: 5,
      date: '1 week ago',
      quote: 'From start to finish, the process was smooth. They kept us informed and delivered exactly what they promised.'
    }
  ]

  const scrollToSlide = (index) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild?.offsetWidth + 24 || 344
      scrollRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' })
      setCurrentIndex(index)
    }
  }

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        const cardWidth = scrollRef.current.firstChild?.offsetWidth + 24 || 344
        const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        
        setCurrentIndex((prev) => {
          const nextIndex = prev + 1
          if (scrollRef.current.scrollLeft >= maxScroll - 10) {
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
            return 0
          } else {
            scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' })
            return nextIndex
          }
        })
      }
    }

    const interval = setInterval(scroll, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="section-container" style={{ background: '#0a0f1e' }}>
      <div data-aos="fade-down" style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span className="section-label" style={{ color: 'var(--accent)' }}>GOOGLE REVIEWS</span>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', color: '#fff' }}>What Our Customers Say</h2>
      </div>

      {/* Auto-sliding Horizontal Scroll Carousel */}
      <div
        ref={scrollRef}
        className="testimonials-scroll"
        style={{
          display: 'flex',
          gap: '24px',
          overflowX: 'auto',
          paddingBottom: '30px',
          scrollSnapType: 'x mandatory'
        }}
      >
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            style={{
              minWidth: '320px',
              maxWidth: '380px',
              flex: '0 0 auto',
              background: '#ffffff',
              borderRadius: '12px',
              padding: '28px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              scrollSnapAlign: 'start'
            }}
          >
            <div>
              {/* Rating and Date */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ display: 'flex', gap: '4px', color: '#ffb800', fontSize: '14px' }}>
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <span style={{ fontSize: '12px', color: '#6b7280' }}>{t.date}</span>
              </div>
              <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
                {t.quote}
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: '#f3f4f6',
                    color: 'var(--text-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '14px'
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-dark)' }}>{t.name}</h4>
                  <p style={{ fontSize: '12px', color: '#6b7280' }}>{t.role}</p>
                </div>
              </div>
              <FcGoogle style={{ fontSize: '20px' }} />
            </div>
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
        {testimonials.slice(0, 3).map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToSlide(idx)}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: currentIndex === idx ? '#0052fe' : 'rgba(255, 255, 255, 0.3)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <style>{`
        .testimonials-scroll {
          scrollbar-width: none;
        }
        .testimonials-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

// 18. SCROLL TO TOP COMPONENT
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '48px',
        height: '48px',
        background: 'var(--accent)',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        boxShadow: '0 4px 15px rgba(0,82,254,0.3)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.3s ease',
        zIndex: 999
      }}
      aria-label="Scroll to top"
    >
      <FiArrowUp />
    </button>
  )
}

// MAIN APP CONTAINER
export default function App() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 80 })
  }, [])

  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <About />
      <Marquee />
      <Services />
      <Projects />
      <Team />
      <Contact />
      <ContactTestimonials />
      <FAQ />
      <Blog />
      <CTABanner />
      <Footer />
      <ScrollToTop />
      <SlidingDot />
    </>
  )
}
