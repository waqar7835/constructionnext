import Slider from './Slider'
import Welcome from './Welcome'
import About from './About'
import Equipments from '@components/Common/Equipments'
import HappyClients from './HappyClients'

const Index = ({welcome, about, equipmentHeading, feedback}) => {
  return (
    <div className="">
      
      <Slider />
      <Welcome  welcome = { welcome } />
      <About about = { about } />
      <Equipments equipmentHeading = { equipmentHeading } />    
      <HappyClients feedback = { feedback } />
    </div>
  );
};

export default Index;
