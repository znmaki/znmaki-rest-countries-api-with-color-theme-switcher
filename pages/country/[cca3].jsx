import axios from 'axios';
import React from 'react'
import Layout from '../../components/Layout';
import Link from 'next/link'
import Image from 'next/image'

const SearchCountry = ({ country, neighbors }) => {
  const { flags: { svg }, name: { common }, population, region, subregion, capital, tld, currencies, languages } = country[0]
  console.log(neighbors);
  return (
    <Layout>
      <div className='w-[94%] mx-auto my-10'>
        <Link href='/'>
          <a className='dark:bg-[#2b3945] shadow-custze-2 border border-[#10141785] px-8 py-3'>← Back</a>
        </Link>
      </div>
      <section className='max-w-[70%] grid place-content-between m-auto grid-flow-row justify-center 2xl:justify-between 2xl:grid-flow-col items-center'>
        <div className='max-w-[500px] max-h-[300px] leading-[0px]'>
          <Image priority='true' width={500} height={300} src={svg} alt={`flag ${common}`} className='object-cover' />
        </div>
        <div className='my-auto'>
          <h2 className='text-2xl font-bold py-5'>{common}</h2>
          <div className='grid grid-rows-5 md:grid-flow-col lg:grid-flow-col 2xl:grid-flow-col info-country'>
            <p>Native Name: <span>{Object.values(country[0].name.nativeName).pop().common}</span></p>
            <p>Population: <span>{population.toLocaleString('en-US')}</span></p>
            <p>Region: <span>{region}</span></p>
            <p>Sub Region: <span>{subregion}</span></p>
            <p>Capital: <span>{capital}</span></p>
            <p className='mt-5 sm:mt-0 2xl:mt-0'>Top Level Domain: <span>{tld[0]}</span></p>
            <p>Currencies: <span>{`${Object.values(currencies)[0].name} (${Object.values(currencies)[0].symbol})`}</span></p>
            <p>Languages: <span>{Object.values(languages).join(', ')}</span></p>
          </div>
          {neighbors && (
            <div className='flex mt-5 flex-col sm:flex-row'>
              <p className='mb-2 mr-5'>Border Countries: </p>
              <div className='grid grid-cols-2 gap-4'>
                {neighbors.map(neighbor => {
                  return (
                    <Link key={neighbor.name.official} href={`/country/${neighbor.name.common}`}>
                      <a className='text-xs text-center dark:bg-[#2b3945] shadow-custze-2 border border-[#10141785] p-3 m-auto md:m-0'>{neighbor.name.official}</a>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const url = 'https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags,subregion,tld,currencies,languages,borders,altSpellings,cca3';
  const { data } = await axios(url);
  const paths = data.map(country => ({
    params: { cca3: country.cca3 }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { cca3 } }) {
  //Para el codigo del país
  const url = `https://restcountries.com/v3.1/alpha/${cca3}`;
  const { data } = await axios(url);
  const country = await data

  //Para los vecinos
  let neighbors = '';
  if (country[0].borders) {
    const queryBorder = country[0].borders.join(',');
    const urlBorder = `https://restcountries.com/v3.1/alpha?codes=${queryBorder}`;
    const dataBorder = await axios(urlBorder)
    neighbors = await dataBorder.data
  }

  return {
    props: {
      country,
      neighbors
    }
  }
}

export default SearchCountry