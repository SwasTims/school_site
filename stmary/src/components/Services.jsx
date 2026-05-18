function Services() {
  return (
    <section className="services">
      <h2 className="services-heading">School Services</h2>

      <div className="services-grid">

        <div className="service-card">
          <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400" alt="Primary School" />
          <div className="service-card-body">
            <h3 className="service-title">Primary School</h3>
            <p className="service-desc">Classes 1-5 focusing on foundational learning and character building in a nurturing environment.</p>
          </div>
        </div>

        <div className="service-card">
          <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400" alt="Lower Secondary" />
          <div className="service-card-body">
            <h3 className="service-title">Lower Secondary</h3>
            <p className="service-desc">Classes 6-8 emphasising core academic subjects and comprehensive skill development for growing minds.</p>
          </div>
        </div>

        <div className="service-card">
          <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400" alt="Secondary & Plus Two" />
          <div className="service-card-body">
            <h3 className="service-title">Secondary & Plus Two</h3>
            <p className="service-desc">Classes 9-12 highlighting rigorous preparation for SEE and HSEB/NEB board exams and future leadership.</p>
          </div>
        </div>

        <div className="service-card">
          <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400" alt="Transportation" />
          <div className="service-card-body">
            <h3 className="service-title">Transportation</h3>
            <p className="service-desc">Safe and reliable school bus network covering all major routes with real time GPS tracking.</p>
          </div>
        </div>

        <div className="service-card">
          <img src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400" alt="Cafeteria" />
          <div className="service-card-body">
            <h3 className="service-title">Cafeteria</h3>
            <p className="service-desc">Nutritious chef prepared meals served in a hygienic environment focusing on balanced student diets.</p>
          </div>
        </div>

        <div className="service-card">
          <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400" alt="Library" />
          <div className="service-card-body">
            <h3 className="service-title">Library</h3>
            <p className="service-desc">A vast collection of digital and print resources, providing a quiet space for research and reading.</p>
          </div>
        </div>

      </div>

      <div className="services-btn-wrap">
        <button className="services-btn">View All Services</button>
      </div>

    </section>
  )
}

export default Services