/** @type {import('next').NextConfig} */
import withLess from 'next-with-less';
// import withLess from '@zeit/next-less';
const nextConfig = {
  lessLoaderOptions: {},
};

// export default nextConfig;
export default withLess(nextConfig);
