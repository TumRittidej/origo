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
            บ่อยครั้งไหมที่คุณกำลัง
            <span className="my-2 md:my-5 block w-full font-semibold text-secondary-color text-6xl md:text-7xl lg:text-8xl">
              "ทำงานหนัก"
            </span>
            แต่ไม่แน่ใจว่ามาถูกทาง
          </div>
          <p className="pt-8 text-lg lg:text-2xl text-center md:text-right text-white/80">
            ยอดขายต่างประเทศยังไม่โตแม้ลงทุนเพิ่ม
            <br />
            เครื่องมือมากขึ้นแต่ความ{' '}
            <span className="underline underline-offset-4 decoration-secondary-color">
              ชัดเจนน้อยลง
            </span>
          </p>
        </h1>
      </div>
    </section>
  )
}

export default BannerSection
