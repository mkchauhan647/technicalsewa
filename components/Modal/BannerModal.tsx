import Image from "next/image";

const BannerModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
      <div className="bg-white p-4 rounded-lg relative w-10/12 md:w-1/2 lg:w-[20%] max-h-[90vh]  my-10">
        <Image
          src="/assets/popup-banner.jpg"
          alt="Banner"
          width={200}
          height={150}
          className="w-full max-h-[70vh] object-contain"
        />
        <button
          className="absolute top-2 right-2 text-black text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default BannerModal;
