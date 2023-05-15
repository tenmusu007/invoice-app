import Link from 'next/link';

import type { LinkType } from 'types/link';

const LinkTag = (props: LinkType) => {
  const { children, path, text } = props;
  return (
    <>
      {text ? (
        <Link href={path} style={{ textDecoration: 'none', color: 'black' }}>
          {text}
        </Link>
      ) : (
        <Link href={path} style={{ textDecoration: 'none', color: 'black' }}>
          {children}
        </Link>
      )}
    </>
  );
};

export default LinkTag;
