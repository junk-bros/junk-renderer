export const dealDataToFileRequest = (data: string[], userId: string) => {
  const res: FilesRequest = {
    userId,
    files: []
  };
  res.files = data.map(item => ({
    filename: item.split("/")[0],
    versionId: item.split("/")[1]
  }));
  console.log(res);
  return res;
};
