export const dealDataToDeleteRequest = (data: string[], userId: string) => {
  const res: DeleteRequest = {
    userId,
    files: []
  };
  res.files = data.map(item => ({
    filename: item.split("/")[0],
    versionId: item.split("/")[1]
  }));
  return res;
};

export const dealDataToDownloadRequest = (data: string[], userId: string) => {
  const res: DownloadRequest[] = [];
  data.map(item => {
    res.push({
      userId,
      filename: item.split("/")[0],
      versionId: item.split("/")[1]
    });
  });
  return res;
};
