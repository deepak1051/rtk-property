import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../store';
import { useEffect } from 'react';
import i18next from 'i18next';

const PropertyListing = () => {
  const { t } = useTranslation();
  const { lang } = useAppSelector((state) => state.user);

  useEffect(() => {
    console.log('updated user lang');
    i18next.changeLanguage(lang);
  }, [lang]);

  return <div> {t('Property Name')} </div>;
};
export default PropertyListing;
