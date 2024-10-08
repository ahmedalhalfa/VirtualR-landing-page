import { communityLinks, platformLinks, resourcesLinks } from '../constants';

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="mx-auto">
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className='space-y-2'>
            {resourcesLinks.map((resource, index) => {
              return (
                <li key={index}>
                  <a href={resource.href} className="text-neutral-300 hover:text-white">
                    {resource.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mx-auto">
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className='space-y-2'>
            {platformLinks.map((resource, index) => {
              return (
                <li key={index}>
                  <a href={resource.href} className="text-neutral-300 hover:text-white">
                    {resource.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mx-auto">
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className='space-y-2'>
            {communityLinks.map((resource, index) => {
              return (
                <li key={index}>
                  <a href={resource.href} className="text-neutral-300 hover:text-white">
                    {resource.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
