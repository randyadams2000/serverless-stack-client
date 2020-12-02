import { Storage } from "aws-amplify";

export async function s3Upload(file) {
  const filename = `${Date.now()}-${file.name}`;

  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type,
  });

  return stored.key;

}export async function s3UploadBlob(file, blob) {
  const filename = `${Date.now()}-${file}`;

  const stored = await Storage.vault.put(filename, blob, {
    contentType: 'video/mp4',
  });

  return stored.key;
}
