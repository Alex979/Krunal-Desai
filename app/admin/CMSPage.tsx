import CMS from "@staticcms/core";
import { useEffect } from "react";
import '@staticcms/core/dist/main.css';
import config from './config';

export default function CMSPage() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      config.local_backend = true;
    }

    CMS.init({config});
  }, []);

  return (
    <div>
      <style jsx global>{`
        html,
        body {
          height: 100%;
        }

        #__next {
          display: none;
        }
      `}</style>
    </div>
  );
};
