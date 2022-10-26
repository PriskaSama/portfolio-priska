import Layout from "@src/components/layouts/layout";
import Intro from "@pages/home/intro/intro";

const HomePage = () => {
    return (
        <>
        <Layout children={<Intro />}/>
        </>
    );
        
};

export default HomePage;