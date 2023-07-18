import React from 'react';

import './Home.css';
import { Header } from "../../components/Header/Header";
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { PropertyCard } from '../../components/PropertyCard/PropertyCard';
import useToken from '../../services/useToken';

function Home(props) {

  const {removeToken} = useToken();

  return (
    <div>
      <Header token={removeToken}/>
      <div className="home__body">
      <SearchBar/>
      <PropertyCard/>
      </div>
    </div>
  );
}
 
export default Home;
