import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" title="Página inicial">
      <Image src="/assets/logo-lions.svg" alt="Logo Lions Seminovos" width={72} height={22} />
    </Link>
  );
};
