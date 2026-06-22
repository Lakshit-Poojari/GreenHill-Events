import React from 'react'

const ContactForm = () => {
  return (
    <>
        <div className="max-w-4xl mx-auto px-8 py-12 text-white">
            <p className="text-xl font-medium">Mobile Bar Enquiry</p>

            <p className="mt-2 text-lg">
                Fields marked with an <span className="text-red-500">*</span> are required
            </p>

            <form className="mt-6 space-y-8">
                {/* Name */}
                <div>
                    <label className="block text-2xl font-bold mb-3">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input type="text" className="w-full h-16 bg-[#E8E8E8] text-black px-4 outline-none"/>
                </div>

                {/* Email */}
                <div>
                    <label className="block text-2xl font-bold mb-3">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input type="email" className="w-full h-16 bg-[#E8E8E8] text-black px-4 outline-none"/>
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-2xl font-bold mb-3">
                        Phone
                    </label>
                    <input type="tel" className="w-full h-16 bg-[#E8E8E8] text-black px-4 outline-none"/>
                </div>

                {/* Message */}
                <div>
                <label className="block text-2xl font-bold mb-3">
                    Message <span className="text-red-500">*</span>
                </label>

                <textarea rows={8} className="w-full bg-[#E8E8E8] text-black p-4 outline-none resize-none"/>
                </div>

                {/* Submit Button */}
                <button type="submit" className="bg-[#333] text-white px-10 py-4 rounded-full text-2xl font-medium
                 hover:bg-[#BDBDBD] hover:text-[#939393] transition-all duration-300">
                    Submit
                </button>
            </form>
        </div>
    </>
  )
}

export default ContactForm