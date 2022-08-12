import Layout from "../components/Layout";
import axios from "axios";
import Country from "../components/Country";
import { useEffect, useState } from "react";
import FormSearch from "../components/FormSearch";


export default function Home({ data }) {

  const [country, setCountry] = useState(data);
  const [regionFilter, setRegionFilter] = useState('')
  const [countryFilter, setCountryFilter] = useState('')
  //react-theme

  useEffect(() => {


    if (countryFilter !== '' && regionFilter !== '') {
      setCountry(data.filter(country => country.name.common.toLowerCase() === countryFilter && country.region.toLowerCase() === regionFilter))
    }
    else if (countryFilter !== '') {
      setCountry(data.filter(country => country.name.common.toLowerCase().includes(countryFilter)))
    }
    else if (regionFilter !== '') {
      setCountry(data.filter(country => country.region.toLowerCase().includes(regionFilter)))
    }
    else {
      setCountry(data)
    }
  }, [data, regionFilter, countryFilter])



  return (
    <Layout >
      <FormSearch
        setRegionFilter={setRegionFilter}
        setCountryFilter={setCountryFilter}
      />
      {country.length === 0 && <h2>Cargando...</h2>}
      <section className="md:grid-cols-2 2xl:grid-cols-4 grid grid-flow-row mt-[3rem]">
        {country &&
          (country.map(pais => (
            <Country
              key={pais.cca3}
              country={pais}
            />
          )))
        }
      </section>

    </Layout>
  )
}

export async function getStaticProps() {
  const url = 'https://restcountries.com/v3.1/all?fields=region,capital,population,name,flags,cca3';
  const { data } = await axios(url);
  /* const limite = Math.floor((Math.random() * (210 - 0 + 1)) + 0)
  const indexCountry = await data.splice(limite, 20) */

  return {
    props: {
      data
    }
  }
}