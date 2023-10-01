import ServicesLists from "../features/shopServices/ServicesLists";
import SinglePageHeader from "../ui/SinglePageHeader";

const Services = () => {
  return (
    <section className="min-h-[80vh]">
      <SinglePageHeader category={"სერვისები"} />
      <article className="section-center pb-14">
        <ServicesLists />
      </article>
    </section>
  );
};

export default Services;
