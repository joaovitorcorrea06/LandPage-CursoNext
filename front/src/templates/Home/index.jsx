import { useEffect, useRef, useState } from 'react';
import { mapData } from '../../api/map-data';
import { mockBase } from '../Base/mock';
import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

function Home() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          'http://localhost:1337/api/pages/?filters[slug]=landing-page',
        );
        const json = await data.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);
        setData(() => pageData[0]);
      } catch {
        setData(undefined);
      }
    };

    if (isMounted.current === true) {
      load();
    }
    return () => {
      isMounted.current = false;
    };
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml } = data;
  const { links, text, link, srcImg } = menu;

  console.log(data);

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      <h1>Oi</h1>
      <h1>Oi</h1>
      <h1>Oi</h1>
    </Base>
  );
}
export default Home;
