import React, {useState} from 'react';
// const googleTrends = require('google-trends-api');
import axios from 'axios';




export default function Searcher() {
    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setstartDate] = useState('');
    const [endDate, setendDate] = useState('');
    const [data,setData]=useState({});

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(searchTerm);
        console.log(startDate);
        console.log(endDate);
        const _data = await axios.post(`http://localhost:8000/`, {
            term: searchTerm,
            startDate: startDate,
            endDate: endDate,
        })

        setData(JSON.parse(_data.data));

        console.log(JSON.parse(_data.data));

    }

  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Daily Trends Data</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl">Here we will show you the daily trends in India.</p>
    </div>
    <form onSubmit={onSubmit} className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <div className="relative flex-grow w-full">
        <label for="full-name" className="leading-7 text-sm text-gray-600">Keyword</label>
        <input type="text" id="full-name" name="full-name" value={searchTerm} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e)=>setSearchTerm(e.target.value)} />
      </div>
      <div className="relative flex-grow w-full">
        <label for="text" className="leading-7 text-sm text-gray-600">Start Date</label>
        <input type="date" id="email" name="email" value={startDate} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e)=>setstartDate(e.target.value)}/>
      </div>
      <div className="relative flex-grow w-full">
        <label for="text" className="leading-7 text-sm text-gray-600">End Date</label>
        <input type="date" id="email" name="email" value={endDate} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e)=>setendDate(e.target.value)}/>
      </div>
      <button type='submit' className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
      {/* {data && (data.default.geoMapData.map((item)=>{
          return(
              <div>
                  <h1>{item.geoName}</h1>
              </div>
          )
      }
      ))} */}
      {}
    </form>
  </div>
</section>
  )
}
