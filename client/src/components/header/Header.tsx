import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CiGlobe } from 'react-icons/ci';
import { Translations } from '../../constant/translation';
import {
  ModalType,
  showModal,
  TranslationType,
  updateLanguage,
  useAppDispatch,
} from '../../store';
const Header = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [show, setShow] = useState(false);
  const handleShowModal = () => {
    dispatch(showModal(ModalType.ADD_PROPERTIES));
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {/* <a className="mr-5 hover:text-gray-900">First Link</a>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a> */}
          <div className="mr-5 hover:text-gray-900 cursor-pointer relative">
            <CiGlobe size={25} onClick={() => setShow((prev) => !prev)} />
            {show && (
              <div className="shadow-md px-4 py-2 rounded gap-3 flex flex-col absolute top-5 right-2">
                <button
                  onClick={() => {
                    dispatch(updateLanguage(TranslationType.EN));
                    setShow(false);
                  }}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    dispatch(updateLanguage(TranslationType.FR));
                    setShow(false);
                  }}
                >
                  France
                </button>
              </div>
            )}
          </div>
        </nav>
        <button
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={handleShowModal}
        >
          {t(Translations.ADD_PROPERTY)}
        </button>
      </div>
    </header>
  );
};
export default Header;
