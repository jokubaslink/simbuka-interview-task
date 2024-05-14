import { forwardRef } from "react";

const Dialog = forwardRef(function Dialog({ toggleDialog, dialogData }, ref) {
  return (
    <dialog
      className="static m-0 mx-auto shadow-2xl rounded-xl bg-[#bb79b9]"
      ref={ref}
    >
      <div className="flex flex-col items-start justify-center p-8 gap-4">
        <button
          className="slimBorder tracking-wide pageButton active:scale-95 w-full"
          onClick={toggleDialog}
        >
          Close
        </button>
        <ul className="flex flex-col items-start text-start list-disc text-white">
          <li>
            Indentification number: {dialogData.customerIdentificationCode}
          </li>
          <li>First name: {dialogData.firstName}</li>
          <li>Last name: {dialogData.lastName}</li>
          <li>Birth date: {dialogData.birthDate}</li>
          <li>Gender: {dialogData.gender}</li>
        </ul>
      </div>
    </dialog>
  );
});

export default Dialog;
