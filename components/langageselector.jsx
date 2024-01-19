import { useTranslation } from 'react-i18next';

// Page gérant l'ajout de boutton avec les images de langues différentes 

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    // console.log(`Changing language to: ${lng}`);    
    i18n.changeLanguage(lng);
  };

  // Associez chaque langue à son chemin d'image
  const languageImages = {
    fr: './flags/french.png',
    en: './flags/english.png',
    de: './flags/german.png',
    es: './flags/spanish.png',
    // Ajoutez d'autres langues au besoin
  };

  return (
    <div className='flex justify-end space-x-4 pr-4 items-center'>
      {Object.keys(languageImages).map((lang) => (
        <button key={lang} className='z-[999]' onClick={() => changeLanguage(lang)}>
          <img src={languageImages[lang]} alt={lang} className='w-8 h-8 mr-2' />
          
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
