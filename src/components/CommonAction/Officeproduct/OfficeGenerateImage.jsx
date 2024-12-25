import ErrorPage from "../../../shared/Error/ErrorPage";

const OfficeGenerateImage = async(image) => {
    const formData = new FormData();
    formData.append("image", image);
    try {
      const url = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMAGE_HIPPO_OFFICE
      }`;
      const res = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const imgData = await res.json();
      return imgData?.data?.url;
    } catch (error) {
      if (error) {
        return <ErrorPage message={error?.message} />;
      }
    }
};

export default OfficeGenerateImage;