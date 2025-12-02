import {React} from 'react';
import { Link } from "react-router-dom";
import TabsWithPagination from '../components/TabsWithPagination';

const Resources = () =>{
  return(
    <div className='resource-page-template'>
      <section className='hero-section'>
        <div className="container">
          <h1>Resources</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>{" "}
              <span>/</span>
              <li className="breadcrumb-item active" aria-current="page">
                Resource
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className='list-resource'>
        <TabsWithPagination/>
      </section>
    </div>
  )
}

export default Resources;