import { SearchIcon } from './Icons'

const FormSearch = ({ setRegionFilter, setCountryFilter }) => {
    return (
        <div className='flex flex-wrap items-center justify-between w-[94%] m-auto'>

            <div className='relative'>
                <div className='absolute left-0 bottom-[0.9rem] pl-[1rem]'>
                    <SearchIcon />
                </div>
                <input type="text" placeholder='Search for a country' onChange={e => setCountryFilter(e.target.value.trim())} className='pl-[3rem] pr-[12rem] py-3 mt-8 dark:bg-[#2b3945]' />
            </div>

            <select onChange={e => setRegionFilter(e.target.value.trim())} defaultValue="" className='px-5 py-3 bg-white mt-8 dark:bg-[#2b3945]'>
                <option value="">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="americas">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europa</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
    )
}

export default FormSearch