import { useAppSelector, ModalType } from '../../store';

import SuccessModal from './SuccessModal';
import AddPropertiesModal from './AddPropertiesModal';

export default function Modal() {
  const { type, open } = useAppSelector((state) => state.modal);

  return (
    <>
      {open ? (
        <>
          {type == ModalType.SUCCESS ? (
            <SuccessModal />
          ) : (
            <AddPropertiesModal />
          )}
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
