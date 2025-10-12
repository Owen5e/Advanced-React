import Head from 'next/head';
import PaginationStyles from './styles/PaginationStyles';

export default function Pagination({ page }) {
  return (
    <PaginationStyles>
      <Head>
        <title>Sick fits - page {page} of ___</title>
      </Head>
    </PaginationStyles>
  );
}
