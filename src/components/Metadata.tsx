;
import { Helmet } from 'react-helmet-async';

interface MetadataProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

const Metadata: React.FC<MetadataProps> = ({ title, description, image, url }) => {
  const defaultImage = '/path/to/your/default-image.jpg'; // Replace with your default image path
  const siteUrl = 'https://your-website.com'; // Replace with your website URL

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph metadata */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Card metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* Other important metadata */}
      <link rel="canonical" href={url || siteUrl} />
    </Helmet>
  );
};

export default Metadata;

