import { Info } from './Info';
import { useDetails } from './use-details';

const CountryDetails = ({ name = "", navigate }) => {
    const {currentCounty, error, status} = useDetails(name)
    
    return (
        <>
            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {currentCounty && <Info push={navigate} {...currentCounty} />}
        </>
    )
}

export {CountryDetails}