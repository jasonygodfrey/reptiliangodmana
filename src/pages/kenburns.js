import AboutComponent from "@components/AboutComponent";
import BlogComponent from "@components/BlogComponent";
import Drops from "@components/Drops";
import KendurnsHero from "@components/KendurnsHero";
import ServicesComponent from "@components/ServicesComponent";
import WhyChooseUsComponent from "@components/WhyChooseUsComponent";
import Layout from "../layout/Layout";

const Kenburns = () => {
  return (
    <Layout pageName={"Home Kenburns"}>
      <KendurnsHero />
      {/* !Hero Header */}
      {/* About Section */}
      <AboutComponent />
      {/* !About Section */}
      {/* Services Section */}
      <ServicesComponent />
      {/* !Services Section */}
      <Drops />
      {/* Investor Section */}
      <WhyChooseUsComponent />
      {/* !Investor Section */}
      {/* Blog Section */}
      <BlogComponent />
    </Layout>
  );
};
export default Kenburns;
