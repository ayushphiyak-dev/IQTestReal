import Image from 'next/image';

export function BrandMark() {
  return (
    <Image
      className="brand-mark"
      src="/favicon.svg"
      width={36}
      height={36}
      sizes="36px"
      alt="IQTestReal brain logo"
      priority
    />
  );
}
