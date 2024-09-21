interface Props {
  onChange: (url: string) => void;
}

export function FileUpload({ onChange }: Props) {
  return (
    <>
      <label htmlFor="fileUpload" className="file-btn">
        <i className="fa-solid fa-upload"></i>&nbsp; &nbsp;Upload
      </label>
      <input
        type="file"
        accept="image/*"
        id="fileUpload"
        onChange={(e) => {
          const imgFile = e.target.files?.[0];
          if (imgFile) {
            const objectUrl = URL.createObjectURL(imgFile);
            onChange(objectUrl);
          } else {
            onChange(".");
          }
        }}
      />
    </>
  );
}
