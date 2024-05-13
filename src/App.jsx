import './App.css';
import photo from "./photo/Frame (2).png"
import instagram from "./photo/ant-design_instagram-filled.png"
import facebook from "./photo/akar-icons_facebook-fill.png"



function App() {
  return (
    <div className="App">


      <div className='container'>




        <header className="header">




          <div className="header_div">



            <div className='header_div_menu'>


                <div className='header_div_menu_logo'>

                  <img src={photo} alt="" />

                </div>

                <ul className='header_div_menu_list'>

                  <li className='header_div_menu_list_title'>
                    <a className='header_div_menulist_title_link' href="#">ALL PRODUCTS</a>
                  </li>

                  <li className='header_div_menulist_title'>
                    <a className='header_div_menulist_title_link' href="#">ABOUT SEEDRA</a>
                  </li>

                  <li className='header_div_menulist_title'>
                    <a className='header_div_menu_list_title_link' href="#">OUR BLOG</a>
                  </li>

                  <li className='header_div_menu_list_title'>
                    <a className='header_div_menu_list_title_link' href="#">CONTACTS</a>
                  </li>

                </ul>


            </div>



            <div className='header_div_element'>


              <div className='header_div_element_logo'>

                <a href="#">
                  <img src={instagram} alt="" />
                </a>

                <a href="#">
                  <img src={facebook} alt="" />
                </a>

              </div>


            </div>



          </div>




        </header>




      </div>


    </div>
  );
}

export default App;
