import { Drawer, Button, Menu } from "antd";
import { useState } from "react";
import MainMenu from './MainMenu'

const { SubMenu } = Menu;

const Mobilemenu = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="mobilemenu">
      <>
      <div className="mobilemenu-inner">
        
          <div className="mobilemenu-logo"><a href="/"><img src='/images/2nd-logo.png' /></a></div>
          <div className="mobilemenu-btnn"> 
          <Button type="primary" onClick={() => setVisible(!visible)}>
          Open
        </Button>
        </div>
      </div>
       
        <Drawer 
          title="Menu"
          placement="right"
          closable={true}
          onClose={() => setVisible(!visible)}
          visible={visible}
          className="mainmobile-ul"
        >
            
          <MainMenu />
        </Drawer>
      </>
    </div>
  );
};

export default Mobilemenu;
