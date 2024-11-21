import { useEffect } from 'react';

const PDF = () => {
  useEffect(() => {
    window.location.href = 'https://new.express.adobe.com/tools/convert-from-pdf?samcap_id=ccdt_applist&locale=es-ES&product=Creative+Cloud+Desktop&product-version=6.4.0.361'; // Redirige directamente
  }, []);

  return null; // No renderiza nada
};

export default PDF;