export const pbURL = "http://127.0.0.1:8090/api";
export const getFileURL = (collection, record_id, file_name, options) =>
  `${pbURL}/files/${collection}/${record_id}/${file_name}${
    options ? `/${options}` : ""
  }`;
