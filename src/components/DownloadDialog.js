"use client";
import { useRef } from "react";

export default function DownloadDialog() {
  const dialogRef = useRef(null);

  // Function that opens the dialog using the native browser API
  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <>
      <button
        onClick={openDialog}
        className="underline underline-offset-4 hover:text-primary transition-colors text-text-main w-fit cursor-pointer"
      >
        3D Model (.glb)
        <span className="inline-block ml-1.5">↓</span>
      </button>

      <dialog
        ref={dialogRef}
        className="m-auto p-8 rounded-xl bg-zinc-900 text-white backdrop:bg-black/80"
      >
        <h2 className="text-xl font-bold mb-4">Download 3D Model?</h2>
        <p className="mb-6">The file size is around 3MB.</p>

        <div className="flex gap-4 mt-8">
          {/* Cancel Button: Just closes the dialog */}
          <button
            onClick={closeDialog}
            className="px-4 py-2 rounded-lg font-medium text-gray-400 hover:text-white transition-colors"
          >
            Cancel
          </button>

          {/* Confirm Button: An <a> tag disguised as a button to trigger the native download */}
          <a
            href="/models/typewriter_ibm_selectric_ii.glb"
            download="ibm_selectric_ii_model.glb"
            onClick={closeDialog}
            className="px-4 py-2 rounded-lg font-medium bg-primary text-black hover:bg-primary/90 transition-colors"
          >
            Download Now
          </a>
        </div>
      </dialog>
    </>
  );
}
