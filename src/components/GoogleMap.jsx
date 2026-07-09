const GoogleMap = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">

      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18..."
        className="w-full h-[450px] rounded-3xl shadow-lg"
        loading="lazy"
      ></iframe>

    </section>
  );
};

export default GoogleMap;