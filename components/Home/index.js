import Slider from './Slider'
import Welcome from './Welcome'
import About from './About'
import Equipments from '@components/Common/Equipments'
import HappyClients from './HappyClients'

const Index = () => {
  return (
    <div className="">
      
      <Slider />
      <Welcome />
      <About />
      <Equipments />    
      <HappyClients />
    </div>
  );
};

export default Index;
