import {DNA} from 'react-loader-spinner' 

export const Loader = ({visible}) => {
    return <DNA
        visible={visible}
        height="80"
        width="300"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
  />
}