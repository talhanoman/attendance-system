import React from "react";

// Functions
const callToast = (setToastDisplay) => {
    setToastDisplay('block')
    setTimeout(() => {
        setToastDisplay('hidden')
    }, 2000);
}
function Toast({ display, message, title }) {    
    return (
        <>
            <div role="alert" className={`rounded-xl border border-gray-100 p-4 shadow-xl fixed right-2 top-[5%] m-5 ${display}  w-96 max-w-full z-50`}>
                <div className="flex items-start gap-4">
                    <span className="text-[#0072b1]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>

                    </span>

                    <div className="flex-1">
                        <strong className="block font-medium text-gray-900">{title}</strong>

                        <p className="mt-1 text-sm text-gray-700">
                            {message}
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export { Toast, callToast };