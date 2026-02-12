const BannerSection = () => {
  return (
    <section
      id="banner_home_section"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      <div className="absolute inset-0">
        <div className="banner-background absolute inset-0"></div>
        <div className="ssss absolute inset-0"></div>
      </div>
      <div className="relative flex items-center justify-center md:justify-end mx-auto max-w-300 h-screen px-0 md:px-6">
        <h1 className="font-heading text-white text-center">
          <div className="block w-full text-white text-3xl md:text-4xl lg:text-5xl">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div>บ่อยครั้งไหมที่คุณกำลัง</div>
              <span className="my-2 md:my-5 block w-full font-semibold text-secondary-color text-6xl md:text-7xl lg:text-8xl">
                "ทำงานหนัก"
              </span>
            </div>
            <div
              data-aos="slide-left"
              data-aos-delay="800"
              data-aos-duration="1200"
            >
              แต่ไม่แน่ใจว่ามาถูกทาง
            </div>
          </div>
          <p
            className="pt-8 text-lg lg:text-2xl text-center md:text-right text-white/80"
            data-aos="fade-up"
            data-aos-delay="1500"
          >
            ยอดขายต่างประเทศยังไม่โตแม้ลงทุนเพิ่ม
            <br />
            เครื่องมือมากขึ้นแต่ความ{' '}
            <span className="relative inline-block">
              ชัดเจนน้อยลง
              <span
                data-aos="zoom-in"
                data-aos-delay="2000"
                data-aos-duration="1200"
                className="absolute left-0 -bottom-1 h-0.5 w-full bg-secondary-color"
              />
            </span>
          </p>
        </h1>
      </div>
    </section>
  )
}

export default BannerSection
