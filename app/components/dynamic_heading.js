// In your page or component
import Hero_section from "./hero_section";

const DynamicHeading = () => {
  const heroConfig = [
    { text: 'Solving big problems', speed: 100 },
    { text: 'Failing a lot in the process', speed: 150 },
    { text: 'Another line of dynamic text', speed: 200 },
  ];

  return (
    <div>
      <Hero_section textConfig={heroConfig} />

    </div>
  );
};

export default DynamicHeading;
