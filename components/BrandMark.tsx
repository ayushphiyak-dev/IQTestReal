import Image from 'next/image';

export function BrandMark() {
  return (
    <Image
      className="brand-mark"
      src="/iqtestreal-logo.svg"
      width={36}
      height={36}
      sizes="36px"
      alt="IQTestReal logo"
      priority
    />
  );
}
