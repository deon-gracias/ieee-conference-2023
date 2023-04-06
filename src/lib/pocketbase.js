export const pbURL = "http://localhost:8090/api";
export const getFileURL = (collection, record_id, file_name, options) =>
  `${pbURL}/files/${collection}/${record_id}/${file_name}${
    options ? `/${options}` : ""
  }`;
