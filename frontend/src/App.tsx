import './App.css';
import Page from './Page';


function App() {
  return <>
    <Page></Page>
  </>;
  // const [data, setData] = useState<Data | null>(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<Error | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:8080/');

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }

  //       const contentType = response.headers.get('content-type');
  //       if (!contentType?.includes('application/json')) {
  //         throw new Error('Expected JSON response');
  //       }

  //       const rawData = await response.json();
  //       const user = DataSchema.parse(rawData);
  //       setData(user);
  //     } catch (err) {
  //       if (err instanceof Error) {
  //         setError(err);
  //       } else {
  //         setError(new Error('An unknown error occurred'));
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  // return (
  //   <>
  //     <h1>Frontend for the Backend</h1>
  //     {data != null &&
  //       <div>
  //         The Model value is as follows:
  //         <ol>
  //           <li>Age: {data?.age}</li>
  //           <li>Name: {data?.name}</li>
  //         </ol>
  //       </div>
  //     }
  //   </>
  // )
}

export default App
