import Head from 'next/head';
import Container from '../components/Container/Container';
import Layout from '../components/Layout';
import SearchBox from '../components/SearchBox.jsx/SearchBox';

export default function HomePage() {
  
  return (
		<Layout>   

		<Head> 
		<title>Homepage</title>
		</Head>
		<Container>
			<section>
					<SearchBox />
			</section>
		</Container>

			
		</Layout>
		

  )
}
