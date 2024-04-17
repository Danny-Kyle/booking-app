import UseFetch from '../../hooks/useFetch'
import './featured.css'

const Featured = () => {

  const {data, loading, error} = UseFetch("")
  console.log(data)

  return (
    <div className='featured'>
      <div className='featuredItem'>
        <img 
          src=""
          alt=''
          className='featuredImg' />
          <div className='featuredTitles'>
            <h1>Cyprus</h1>
            <h2>123 properties</h2>
          </div>
      </div>
      <div className='featuredItem'>
        <img 
          src=""
          alt=''
          className='featuredImg' />
          <div className='featuredTitles'>
            <h1>Reno</h1>
            <h2>533 properties</h2>
          </div>
      </div>
      <div className='featuredItem'>
        <img 
          src=""
          alt=''
          className='featuredImg' />
          <div className='featuredTitles'>
            <h1>Sydney</h1>
            <h2>232 properties</h2>
          </div>
      </div>
    </div>
  )
}

export default Featured