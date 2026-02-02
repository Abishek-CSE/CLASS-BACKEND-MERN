import { useEffect, useState } from "react";

const withDataFetch = (WrappedComponent, url) => {
  return function EnhancedComponent(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          setData(result.users); 
          setLoading(false);
        });
    }, [url]);

    if (loading) {
      return <h3>Loading...</h3>;
    }

    return <WrappedComponent {...props} data={data} />;
  };
};

export default withDataFetch;