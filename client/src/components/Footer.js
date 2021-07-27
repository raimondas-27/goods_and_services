import React, {Component} from 'react';

class Footer extends Component {
   state = {}

   render() {
      return (
          <footer className="bg-light text-center text-lg-start">
             <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                © 2021 Copyright:
                <a className="text-dark" href="#">Made by Raimondas </a>
             </div>
          </footer>
      );
   }
}

export default Footer;