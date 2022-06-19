import React from 'react';



function Footer() {
    
    return (
        <div className ="main-footer ">
            <div className=" container ">
                <div className="row flex justify-between">
                    {/* Column 1*/}
                    <div className="col-md-3 col-sm-6">
                        <ul className="list-unstyled">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        मैत्री झाडांशी
              </a>
              
     <th><a href="#" className="font-medium text-green-600 hover:text-indigo-500">पळ!</a></th>
     <li>पळ!</li>
                            <li>पळ!</li>
                            <li>पळ!</li>
                            
                        </ul>
                    </div>
                    {/* Column 2*/}
                    <div className="col-md-3 col-sm-6">
                        <ul className="list-unstyled">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        मैत्री झाडांशी
              </a>
                            <li>धाव!</li>
                            <li>धाव!</li>
                            <li>धाव!</li>
                            <li>धाव!</li>
                        </ul>
                    </div>
                    {/* Column 3*/}
                    <div className="col-md-3 col-sm-6">
                        <ul className="list-unstyled">
                        
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        मैत्री झाडांशी
              </a>
              <li>पळ!</li>
                            <li>पळ!</li>
                            <li>पळ!</li>
                            <li>पळ!</li>
                        </ul>
                    </div>
                    {/* Column 4*/}
                    <div className="col-md-3 col-sm-6">
                        <ul className="list-unstyled">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        मैत्री झाडांशी
              </a>
              <li>धाव!</li>
                            <li>धाव!</li>
                            <li>धाव!</li>
                            <li>धाव!</li>
                        </ul>
                    </div>
                </div>
                {/* Footer top */}
                <div className="footer-bottom">
                  <p className="text-xs-center">
                    &copy;{new Date().getFullYear()} City Guide App-All right reserved
                  </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
