import { type FileWithPath } from "react-dropzone"

export type FileWithPreview = FileWithPath & {
  preview: string
}
