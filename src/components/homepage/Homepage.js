import Header from "../header/Header";
import Block from "../blocks/Block";
import Mission from "../mission/Mission";
import WhyUs from "../whyus/WhyUs";
import Guide from "../guide/Guide";
import Testimony from "../testimony/Testimony";

const Homepage = () => {
    return (
        <>
        <Header />
        <Block />
        <Mission />
        <WhyUs />
        <Guide />
        <Testimony />
        </>
     );
}
 
export default Homepage;