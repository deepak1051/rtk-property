import { useTranslation } from 'react-i18next';
import { Translations } from '../../constant/translation';
import { closeModal, useAppDispatch } from '../../store';

const AddPropertiesModal = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div className="justify-center items-center flex overflow-x-hidden  fixed inset-0 z-50 outline-none focus:outline-none overflow-y-hidden">
      <div className="relative w-auto my-6 mx-auto max-w-3xl min-w-[500px]">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-2xl font-semibold">
              {t(Translations.ADD_PROPERTY)}
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={handleCloseModal}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative px-6  flex-auto">
            <form>
              <div className="mb-2">
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Property Name
                </label>
                <input
                  // value={email}
                  // onChange={onChange}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="outline-none shadow-sm border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="mb-2">
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Description
                </label>
                <input
                  // value={email}
                  // onChange={onChange}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="shadow-sm border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="mb-2">
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Neighbourhood overview
                </label>
                <input
                  // value={email}
                  // onChange={onChange}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="shadow-sm border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="mb-2">
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Price
                </label>
                <input
                  // value={email}
                  // onChange={onChange}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="shadow-sm border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="mb-2">
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Summary
                </label>
                <input
                  // value={email}
                  // onChange={onChange}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="shadow-sm border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </form>
          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={handleCloseModal}
            >
              Close
            </button>
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={handleCloseModal}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddPropertiesModal;
