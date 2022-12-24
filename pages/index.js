import Head from 'next/head';
import Layout from '../components/Layout'
import Location from '../components/Location/Location';
import TestLocation from '../components/Location/TestLocation';
import SearchBox from '../components/SearchBox.jsx/SearchBox';
import Container from '../components/Container/Container';

export default function HomePage() {
  
  return (
		<Layout>   

		<Head> 
		<title>Homepage</title>
		</Head>
		
			<section>
			{/* <TestLocation /> */}
			
				<Container>
					<SearchBox />
				</Container>
			</section>

			
		</Layout>
		

  )
}
