import { instance } from 'configs/instance';

const uploadPhoto = async (blobUrl) => {
  const formData = new FormData();
  formData.append('photo', blobUrl);

  const response = await instance.post('/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return response.data.url;
};

export { uploadPhoto };
